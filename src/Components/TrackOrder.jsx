import React, { useState } from "react";
import { db } from "../../src/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [orderInfo, setOrderInfo] = useState(null);

  const handleTrack = async () => {
    const q = query(collection(db, "orders"), where("orderId", "==", orderId));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      setOrderInfo(snapshot.docs[0].data());
    } else {
      setOrderInfo("Not found");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-800 shadow-lg  rounded-xl">
      <h2 className="text-xl font-bold mb-4">Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter your Order ID"
        className="border p-2 w-full rounded-lg"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button
        onClick={handleTrack}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        Track Order
      </button>

      {orderInfo && (
        <div className="mt-6 border-t pt-4">
          {orderInfo === "Not found" ? (
            <p className="text-red-500">❌ Order not found!</p>
          ) : (
            <>
              <p className="font-semibold">Order ID: {orderInfo.orderId}</p>
              <p>Status: {orderInfo.status}</p>
              <p>Total: ₹{orderInfo.order.total}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
