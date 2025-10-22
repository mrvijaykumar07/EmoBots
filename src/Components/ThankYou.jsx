import React from "react";
import { Link } from "react-router-dom";
import TrackOrder from "./TrackOrder";

const ThankYou = () => {
  return (
    <section id="thankyou" className="py-14 bg-gray-800 text-white">
      <div className="text-center mb-6">
   
          <Link to="/visiters">
            <p className="text-lg text-blue-400 mt-10 cursor-pointer">
              Thank You
            </p>
          </Link>
        

        <h2 className="text-3xl font-bold my-4 items-center">
          For Visit our site
        </h2>
      </div>
    </section>
  );
};

export default ThankYou;
