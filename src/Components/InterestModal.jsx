import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc, increment } from "firebase/firestore";

const InterestModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");

  // ✅ Increment global visit count (modal open hone par)
  const incrementGlobalVisit = async () => {
    const counterRef = doc(db, "counters", "visits");
    try {
      await updateDoc(counterRef, { visitedusercount: increment(1) });
    } catch (err) {
      console.error("Error updating global visit count:", err);
    }
  };

  // Modal open hone par visit count
  useEffect(() => {
    if (isOpen) {
      incrementGlobalVisit();
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) {
      onClose();
      return;
    }

    try {
      // Add user interest
      await addDoc(collection(db, "interested"), {
        phoneno: phone || null,
        interested: !!phone,
        timestamp: serverTimestamp(),
      });

      // ✅ Global interested increment only once per user
      if (!localStorage.getItem("interested_done")) {
        const counterRef = doc(db, "counters", "visits");
        await updateDoc(counterRef, { globalVisit: increment(1) });
        localStorage.setItem("interested_done", "1");
      }

    } catch (err) {
      console.error("Error adding document:", err);
    }

    setPhone("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl relative md:w-1/2 w-80 h-80 flex flex-col items-center justify-center">
        <button
          onClick={handleSubmit} // ✕ pe click bhi submit kare
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold mb-4 text-blue-400">
          Thank You for Your Interest!
        </h3>
        <p className="mb-4 text-xs text-gray-300 text-center md:text-left">
          Enter your phone number and our team will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 rounded-lg text-black px-6 bg-slate-100 w-full"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 p-2 rounded-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterestModal;
