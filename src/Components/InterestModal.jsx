import { useState } from "react";
import { db } from "../firebase"; // aapka already setup firebase instance
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const InterestModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) return;

    try {
      await addDoc(collection(db, "interestedUsers"), {
        phone,
        timestamp: serverTimestamp(),
      });
      setSubmitted(true);
      setPhone("");
    } catch (err) {
      console.error("Error adding document:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed   inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-xl  relative  md:w-1/2 w-80 h-80 flex flex-col items-center justify-center">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {!submitted ? (
          <>
       <h3 className="text-lg font-bold mb-4 text-blue-400">
  Thank You for Your Interest!
</h3>
<p className="mb-4 text-xs text-gray-300 text-center md:text-left">
   Enter your phone number and our team will contact you shortly.
</p>


            <form onSubmit={handleSubmit} className="flex flex-col gap-3 ">
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-2 rounded-lg text-black px-6 bg-slate-200"
                required
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg font-semibold"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2 text-blue-400">
              Thank you!
            </h3>
            <p>We will contact you soon.</p>
            <button
              onClick={onClose}
              className="mt-4 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestModal;
