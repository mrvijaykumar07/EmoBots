import React, { useEffect } from "react";
import { db } from "../firebase";
import { doc, updateDoc, increment } from "firebase/firestore";

const Photosection = () => {
  useEffect(() => {
    // Ek session me sirf ek baar increment
    const key = "photosection_globalVisit";
    if (!localStorage.getItem(key)) {
      const counterRef = doc(db, "counters", "visits");
      updateDoc(counterRef, {
        globalVisit: increment(1),
      }).catch((err) => console.error("Error incrementing globalVisit:", err));
      localStorage.setItem(key, "1");
    }
  }, []);

  return (
    <section
      id="home"
      className="hero bg-gray-800 mx-auto flex w-full h-screen md:py-20 md:px-44"
    >
      <div className="flex flex-col justify-start container">
        <div className="w-full flex items-center justify-center md:hidden mt-4">
          <img
            src="/assets/images/mobileBanner.jpg"
            alt="Bijaya Kumar"
            className="w-96 h-[240px] object-cover"
          />
        </div>

        <div className="flex flex-col justify-center container md:py-8 pt-8 px-6">
          <h1 className="md:text-2xl text-xl font-bold mb-3">
            Representing....
          </h1>
          <h1 className="md:text-6xl text-5xl font-bold mb-3"> MagicPupils</h1>
          <p className="text-xl text-gray-50 font-bold">Cute Mini Robooos</p>

          <div>
            <p className="mt-6 text-lg max-w-2xl hidden md:block">
              “Hey..! I’m your tiny RoBo Blinki — nice to meet you! It’s kinda
              lonely here… would you please take me to your home ? I promise to
              be your funniest little companion!”
            </p>
            <p className="mt-6 text-sm max-w-2xl md:hidden ">
              “Hey..! I’m your tiny RoBo Blinki — nice to meet you! It’s kinda
              lonely here… would you please take me to your home ? I promise to
              be your funniest little companion!”
            </p>

            <a
              href="#blinki"
              className="w-auto mt-6 inline-flex items-center bg-blue-600 md:px-10 px-5 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition font-bold"
            >
              <span className="mr-2">Visit Store</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 hidden md:block ml-7">
        <img
          src="/assets/images/blinkiGif.gif"
          alt="Bijaya Kumar"
          className="rounded-full w-[820px] h-[380px] object-cover hidden md:block"
        />
      </div>
    </section>
  );
};

export default Photosection;
