import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

const INTERESTS_COLLECTION = "interested"; // Firestore collection name
const COUNTERS_DOC_PATH = "counters/visits"; // counters collection me visits document
const ADMIN_PASSWORD = "0000";

export default function AdminDashboard() {
  const [visits, setVisits] = useState({ totalVisits: 0, totalInterested: 0 });
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!unlocked) return;

    // Fetch phone submissions
    const q = query(
      collection(db, INTERESTS_COLLECTION),
      orderBy("timestamp", "desc")
    );
    const unsubscribeInterests = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((d) => {
          const data = d.data();
          return { id: d.id, phone: data.phoneno, createdAt: data.timestamp ?? serverTimestamp() };
        });
        setSubmissions(items);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching interests:", err);
        setLoading(false);
      }
    );

    // Fetch global counters
    const [col, docId] = COUNTERS_DOC_PATH.split("/");
    const visitsDocRef = doc(db, col, docId);
    const unsubscribeVisits = onSnapshot(
      visitsDocRef,
      (snap) => {
        if (snap.exists()) {
          const data = snap.data();
          setVisits({
            totalVisits: data.visitedusercount || 0,
            totalInterested: data.globalVisit || 0,
          });
        } else {
          setVisits({ totalVisits: 0, totalInterested: 0 });
        }
      },
      (err) => console.error("Error fetching visits:", err)
    );

    return () => {
      unsubscribeInterests();
      unsubscribeVisits();
    };
  }, [unlocked]);

  // allow pressing Escape to go back when on the login screen
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape" && !unlocked) {
        window.history.back();
      }
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [unlocked]);

  function formatTimestamp(ts) {
    if (!ts) return "-";
    try {
      if (ts.toDate) return new Date(ts.toDate()).toLocaleString();
      return new Date(ts).toLocaleString();
    } catch {
      return String(ts);
    }
  }

  function handleUnlock(e) {
    e.preventDefault();
    setError("");
    if (passwordInput.length !== 4) {
      setError("Please enter a 4-digit password.");
      return;
    }
    if (passwordInput === ADMIN_PASSWORD) {
      setUnlocked(true);
      setPasswordInput("");
    } else {
      setError("Galat password — try again.");
    }
  }



  // --- LOGIN / LOCK SCREEN ---
  if (!unlocked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6 relative">
        {/* Top-right cross button */}
        <button
          onClick={() => window.history.back()}
          aria-label="Close / Back"
          className="absolute top-6 right-6 text-white/90 bg-white/5 hover:bg-white/10 rounded-full w-10 h-10 flex items-center justify-center"
          title="Close (Esc)"
        >
          ✕
        </button>

        <div className="max-w-md w-full bg-white/5 rounded-xl p-6 relative">
          <h2 className="text-xl font-semibold mb-4 text-white">Admin Login</h2>
          <p className="text-sm text-gray-300 mb-4">
            Enter the 4-digit admin password to view submissions.
          </p>
          <form onSubmit={handleUnlock} className="space-y-3">
            <input
              autoFocus
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={passwordInput}
              onChange={(e) =>
                setPasswordInput(e.target.value.replace(/\D/g, "").slice(0, 4))
              }
              placeholder="Enter 4-digit password"
              className="w-full p-3 rounded-md bg-gray-800 text-white outline-none"
            />
            {error && <p className="text-xs text-red-400">{error}</p>}
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 bg-green-600 rounded-md font-semibold">
                Unlock
              </button>

              {/* Back button in the form area */}
              <button
                type="button"
                onClick={() => window.history.back()}
                className="px-4 py-2 bg-gray-700 rounded-md"
              >
                Back
              </button>

              <button
                type="button"
                onClick={() => {
                  setPasswordInput("");
                  setError("");
                }}
                className="px-4 py-2 bg-gray-600 rounded-md"
              >
                Clear
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Tip: Default password is <span className="font-mono">0000</span>. Press <span className="font-mono">Esc</span> or click ✕ to go back.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // --- MAIN ADMIN DASHBOARD ---
  return (
    <div className="md:px-44 mx-auto p-6 bg-gray-800 text-white min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 md:mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-lg px-3 py-2 bg-gray-700 rounded-md"
          >
            ←
          </button>
          <h1 className="text-2xl font-bold ">Analytics</h1>
        </div>
        <div className="flex gap-2">
      
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 bg-white/5 rounded-lg">
          <p className="text-sm text-gray-100">Website visiters</p>
        <p className="text-xs">(counted only for new browser/device)</p>

          <p className="text-3xl font-semibold mt-2 text-blue-400">{visits.totalInterested}</p>
        </div>
        <div className="p-4 bg-white/5 rounded-lg">
          <p className="text-sm text-gray-100">intrested click</p>
          <p className="text-xs">(one user can click intresed btn many times)</p>
          <p className="text-3xl font-semibold mt-2 text-green-400">{visits.totalVisits}</p>
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-4 overflow-x-auto">
        <h2 className="font-semibold mb-3">Intrested user phone no</h2>
        {loading ? (
          <p className="text-gray-400">Loading…</p>
        ) : submissions.length === 0 ? (
          <p className="text-gray-400">No submissions yet.</p>
        ) : (
          <table className="min-w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-3 text-sm text-gray-300">#</th>
                <th className="py-2 px-3 text-sm text-gray-300">Phone</th>
                <th className="py-2 px-3 text-sm text-gray-300">Time</th>
                <th className="py-2 px-3 text-sm text-gray-300 md:block hidden">Doc ID</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((s, idx) => (
                <tr key={s.id} className={idx % 2 === 0 ? "bg-white/2" : "bg-transparent"}>
                  <td className="py-2 px-3 text-sm text-gray-200">{idx + 1}</td>
                  <td className="py-2 px-3 text-sm text-gray-200">{s.phone ?? "-"}</td>
                  <td className="py-2 px-3 text-xs text-gray-200">{formatTimestamp(s.createdAt)}</td>
                  <td className="py-2 px-3 text-sm text-gray-400 hidden md:block">{s.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
