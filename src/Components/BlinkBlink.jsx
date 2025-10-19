import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CircularGallery from "./CircularGallery";
const ProductPage = () => {
  const [showMore, setShowMore] = useState(false);

  const blinkiSectionRef = useRef(null);

  // 👇 Track visibility of section to show/hide floating price bar

  const images = [
    "/assets/images/blinkBlinkWithBg.jpg",
    "/assets/images/blinkBlinkWithBg.jpg",
    "/assets/images/blinkBlinkWithBg.jpg",
    "/assets/images/blinkBlinkWithBg.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section
      id="blinki"
      ref={blinkiSectionRef}
      className="bg-gray-900 text-white py-20 px-6 relative"
    >
      <div className="md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-visible">
        {/* Left side - Images */}
        {/* <div>
          <img
            src={mainImage}
            alt="Robot Product"
            className="w-full h-60 object-contain rounded-2xl bg-gray-800"
          />
          <div className="flex gap-3 mt-4 justify-center">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Robot ${index}`}
                className={`w-20 h-20 rounded-xl cursor-pointer border-2 ${
                  mainImage === img ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div> */}
     <CircularGallery/>

        {/* Right side - Product Info */}
        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Blinki – Your Smart Mini Robo Buddy
          </h2>
          <div className="flex gap-3">
            <p className="text-blue-400 font-semibold">Brand: EmoBot</p>
            <p className="text-yellow-400">★★★★☆ (4.2 ratings)</p>
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm">
            Meet Blinki — Your Friendly Smart Robo. It’s more than just a desk
            accessory — it’s a tiny friend who lights up your day, helps you
            focus, keeps you healthy, and plays with you when you need a break!
          </p>
          {/* Key Features */}
          <div className="mt-6 hidden md:block">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">
              Key Features:
            </h3>
            <ul className="list-disc ml-4 text-xs space-y-1 text-gray-300">
              <li>
                Expressive LED face that shows emotions and reacts to touch.
              </li>
              <li>
                Built-in Focus Mode timer helps improve productivity and
                concentration.
              </li>
              <li>
                Hydration reminder with gentle light cues to keep you healthy.
              </li>
              <li>Rechargeable battery with up to 8 hours of playtime.</li>
            </ul>
          </div>

          {/* See More Button */}
          <div className="mt-4"></div>
        </div>
      </div>


      <div className="bg-gray-900 md:w-2/3 p-4 rounded-xl mt-4 sticky top-20 mx-auto border ">
        <div className="flex items-center justify-between">
          {/* Price Info */}
          <div className="flex items-end gap-3">
            <div>
              <div className="flex items-center gap-2 md:ml-4">
                <p className="md:text-2xl text-2xl font-bold text-green-400">
                  ₹999
                </p>
                <p className="text-gray-400 line-through text-lg">₹2999</p>
                <span className="md:text-sm text-xs font-semibold text-green-50 bg-opacity-20 px-2 py-1 rounded-md">
                  67% OFF
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-1 md:ml-6">
                Inclusive of all taxes
              </p>
            </div>
          </div>

          {/* Buy Now Button */}
         <Link to="/checkout">
  <button className="bg-green-600 hover:bg-green-700 md:px-14 md:mr-8 px-4 py-2 rounded-lg font-semibold text-sm transition-all">
    Buy Now
  </button>
</Link>
        </div>




        
      </div>
<div className="flex justify-center mt-6">
  <button
    onClick={() => {
      if (!showMore) {
        setShowMore(true);
        setTimeout(() => {
          const el = document.getElementById("descriptionblinki");
          el?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      } else {
        setShowMore(false);
      }
    }}
    className="text-blue-400 underline font-semibold px-4 py-2 rounded-md bg-gray-900/50 transition-all duration-300"
  >
    {showMore ? "Hide Details" : "See more information about this product"}
  </button>
</div>

      {/* Expanded Details */}
      {showMore && (
        <div   id="descriptionblinki" className="md:w-3/4 mx-auto mt-4 transition-all duration-700 ease-in-out">
          {/* Feature Section */}
          <div
           
            className="bg-gray-800 p-6 rounded-2xl mb-6"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Smart Interactive Features
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="text-lg font-semibold text-yellow-400">
                  🕒 Focus Mode
                </h4>
                <p>
                  Need to focus? Just activate{" "}
                  <span className="text-blue-400">Focus Mode</span>, and Blinki
                  becomes a calm, glowing timer that helps you dive into deep
                  work.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400">
                  💧 Hydration Reminder
                </h4>
                <p>
                  Blinki cares about you in small, meaningful ways. With cute
                  little reminders, he’ll gently tell you when it’s time to
                  drink water.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400">
                  🎮 Game Mode
                </h4>
                <p>
                  Blinki entertains himself with games like Tetris and Pong. You
                  can join in and play too — fun and laughter guaranteed!
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-yellow-400">
                  🍩 Feed Blinki
                </h4>
                <p>
                  Double tap to feed Blinki and watch him munch happily! He
                  loves being pampered just like a real pet.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-gray-800 p-6 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Technical Details
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
              <p>
                <span className="font-semibold">Model Number:</span> 62222654
              </p>
              <p>
                <span className="font-semibold">Material:</span> ABS Plastic
              </p>
              <p>
                <span className="font-semibold">Color:</span> Green
              </p>
              <p>
                <span className="font-semibold">Battery:</span> 3.7V 350mAh
              </p>
              <p>
                <span className="font-semibold">Charging Time:</span> 50 min
              </p>
              <p>
                <span className="font-semibold">Play Time:</span> ~20 min
              </p>
              <p>
                <span className="font-semibold">Weight:</span> 405g
              </p>
              <p>
                <span className="font-semibold">Size:</span> 15 × 10.5 × 8.9 cm
              </p>
              <p>
                <span className="font-semibold">Manufacturer:</span> EmoBot
              </p>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-gray-800 p-6 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Product Description
            </h3>
            <p className="text-gray-300 leading-relaxed">
              This intelligent educational robot toy is designed for both boys
              and girls. It can talk, dance, walk, and sing — a fun and
              interactive companion for children.
            </p>
          </div>

          {/* Policy Section */}
          <div className="bg-gray-800 p-6 rounded-2xl grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                Returns Policy
              </h4>
              <p className="text-gray-300 text-sm">
                Return within 7 days of delivery in original condition for a
                full refund.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                Warranty
              </h4>
              <p className="text-gray-300 text-sm">
                6 months manufacturer warranty on manufacturing defects.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">
                Secure Transaction
              </h4>
              <p className="text-gray-300 text-sm">
                All payments are protected with secure encryption and verified
                payment gateways.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductPage;
