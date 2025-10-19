import React, { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database"; // Firebase Realtime DB
import app from "../../src/firebase"; // aapka firebase config

const Checkout = () => {
  const [step, setStep] = useState(1);

  // Address state
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    pincode: "",
    state: "",
    city: "",
    house: "",
    road: "",
    landmark: "",
  });

  // Order state
  const [order, setOrder] = useState({
    items: [
      {
        name: "Blinki –Smart Mini Robo Buddy",
        quantity: 1,
        price: 520,
        save: 474,
      },
    ],
    totalAmount: 525,
  });

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState("");

  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Firebase save
  const handleSubmit = () => {
    const db = getDatabase(app);
    const orderId = `order_${Date.now()}`; // unique id
    set(ref(db, `orders/${orderId}`), {
      address,
      order,
      paymentMethod,
      timestamp: Date.now(),
    })
      .then(() => {
        console.log("Order saved successfully!");
      })
      .catch((err) => {
        console.error("Error saving order:", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-800">
      <header className="bg-slate-500 shadow-sm p-4 flex items-center relative">
        {/* Arrow button */}
        <button
          onClick={() => {
            if (step === 1) navigate("/");
            else prevStep();
          }}
          className="absolute left-4"
        >
          <ArrowLeft className="w-10 md:h-7  rounded-xl h-6 text-white md:ml-24" />
        </button>

        {/* Title */}
        <h1 className="text-lg font-semibold text-white mx-auto text-center w-full">
          {step === 1
            ? "Address"
            : step === 2
            ? "Order Summary"
            : step === 3
            ? "Payment"
            : "Order Successful"}
        </h1>
      </header>

      {/* Step Indicator */}
      {step <= 3 && (
        <div className="flex justify-center mt-6 mb-2">
          {["Address", "Order Summary", "Payment"].map((label, index) => (
            <div
              key={index}
              className={`flex items-center ${index < 2 ? "w-24 md:w-40" : ""}`}
            >
              <div
                className={`rounded-full w-8 h-8 flex items-center justify-center font-semibold ${
                  step >= index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </div>
              {index < 2 && (
                <div
                  className={`flex-1 h-1 ${
                    step > index + 1 ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-2xl mx-auto bg-gray-800 text-white px-6 py-3 rounded-xl shadow-md mt-2">
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold mb-0"> Add Address</h2>
            <form className="space-y-2">
              <div>
                <label className="block text-xs font-medium">Full Name *</label>
                <input
                  type="text"
                  value={address.fullName}
                  onChange={(e) =>
                    setAddress({ ...address, fullName: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                   placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-xs font-medium">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={address.phone}
                  onChange={(e) =>
                    setAddress({ ...address, phone: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                   placeholder="Enter your Phone Number"
                />
              </div>

              <div className="flex gap-3">
                <div className="w-1/2">
                  <label className="block text-xs font-medium">Pincode *</label>
                  <input
                    type="text"
                    value={address.pincode}
                    onChange={(e) =>
                      setAddress({ ...address, pincode: e.target.value })
                    }
                    className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                  />
                </div>

                <div className="w-1/2 flex items-end">
                  <button
                    type="button"
                    className="w-full border bg-gray-900 border-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-blue-600 hover:text-white"
                  >
                    Use My Location
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium">State *</label>
                  <input
                    type="text"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                    className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xs font-medium">City *</label>
                  <input
                    type="text"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                    className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium">
                    House No., Building Name *
                  </label>
                  <input
                    type="text"
                    value={address.house}
                    onChange={(e) =>
                      setAddress({ ...address, house: e.target.value })
                    }
                    className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                     placeholder="Eg: 12B, Sunshine Apartments"
                  />
                </div>

                <div className="flex-1">
                  <label className="block text-xs font-medium">
                    Road name, Area, Colony *
                  </label>
                  <input
                    type="text"
                    value={address.road}
                    onChange={(e) =>
                      setAddress({ ...address, road: e.target.value })
                    }
                    className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                    placeholder="Eg: MG Road, Sector 5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium">
                  Nearby Landmark
                </label>
                <input
                  type="text"
                  value={address.landmark}
                  onChange={(e) =>
                    setAddress({ ...address, landmark: e.target.value })
                  }
                  className="w-full border rounded-lg p-2 text-sm bg-gray-900"
                  placeholder="Eg: Near City Mall / Temple"
                />
              </div>
            </form>

            <button
              onClick={nextStep}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
            >
              Save & Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="border rounded-lg p-4">
              <p className="font-medium">Deliver to:</p>
              <p className="text-gray-100">
                {address.fullName}, {address.house}, {address.road},{" "}
                {address.landmark}, {address.city}, {address.state} -{" "}
                {address.pincode}
              </p>
              <p className="text-gray-100">Phone: {address.phone}</p>
            </div>

            {order.items.map((item, idx) => (
  <div key={idx} className="mt-4 border rounded-lg p-4">
    <p className="font-semibold">{item.name}</p>

    {/* Quantity selector */}
    <div className="flex items-center gap-2 mt-1">
      <span className="text-sm text-gray-100">Qty:</span>
      <select
        value={item.quantity}
        onChange={(e) => {
          const newQuantity = parseInt(e.target.value);
          setOrder((prevOrder) => {
            const newItems = [...prevOrder.items];
            newItems[idx] = { ...newItems[idx], quantity: newQuantity };

            // Recalculate total amount
            const totalAmount = newItems.reduce(
              (acc, cur) => acc + cur.price * cur.quantity,
              0
            );

            return { ...prevOrder, items: newItems, totalAmount };
          });
        }}
        className="border rounded p-1 text-sm bg-gray-900 text-white"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <span className="text-sm text-gray-100">| ₹{item.price * item.quantity}</span>
    </div>

    <p className="text-green-600 text-sm mt-1">You'll save ₹{item.save}!</p>
    <p className="text-gray-100 mt-2">
      Delivery by <b>Oct 25, Sat</b>
    </p>
  </div>
))}


            <div className="flex justify-between mt-4 text-lg font-semibold">
              <span>Total Amount</span>
              <span>₹{order.totalAmount}</span>
            </div>

            <button
              onClick={nextStep}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg"
            >
              Continue to Payment
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold mb-4">Payment Options</h2>
            <div className="space-y-3">
              {["UPI", "Credit / Debit Card", "Cash on Delivery"].map(
                (method, idx) => (
                  <label
                    key={idx}
                    className="flex items-center space-x-3 border p-3 rounded-lg"
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={method}
                      checked={paymentMethod === method}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <span>{method}</span>
                  </label>
                )
              )}
            </div>

            <div className="flex justify-between mt-6 text-lg font-semibold">
              <span>Total Payable</span>
              <span>₹{order.totalAmount}</span>
            </div>

            <button
              onClick={() => {
                nextStep();
                handleSubmit(); // save all data to Firebase
              }}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg"
            >
              Pay Now
            </button>
          </>
        )}

        {step === 4 && (
          <div className="text-center py-16 bg-gray-900 mt-14 p-4">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-100">
              Order Successful!
            </h2>
            <p className="text-gray-200 mt-2">
              Thank you for shopping with us. Your item will be delivered soon.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
