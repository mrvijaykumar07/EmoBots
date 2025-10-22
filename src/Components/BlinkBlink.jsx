import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import {useEffect} from "react";
import CircularGallery from "./CircularGallery";
import InterestModal from "./InterestModal"
const ProductPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const blinkiSectionRef = useRef(null);

  // 👇 Track visibility of section to show/hide floating price bar

  // const images = [
  //   "/assets/images/blinkijpg.jpg",
  //   "/assets/images/blinkijpg.jpg",
  //   "/assets/images/blinkijpg.jpg",
  //   "/assets/images/blinkijpg.jpg",
  // ];

  // const [mainImage, setMainImage] = useState(images[0]);

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
        <CircularGallery />

        {/* Right side - Product Info */}
        <div className="">
          <h2 className="text-2xl font-bold mb-2 text-white">
            Blinki – Your Smart Mini Robo Buddy
          </h2>
          <div className="flex gap-3">
            <p className="text-blue-400 font-semibold">Brand: Magic Pupils</p>
            {/* <p className="text-yellow-400">★★★★☆ (4.2 ratings)</p> */}
          </div>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm hidden md:block">
            Meet Blinki — Your Friendly Smart Robo! More than just a desk
            accessory, Blinki is a tiny companion who lights up your day, keeps
            you focused, reminds you to stay healthy, and even plays with you
            when you need a fun break. With over{" "}
            <span className="text-blue-400">80 dynamic motion effects</span> and
            interactive touch control, every moment with Blinki feels alive!
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-left md:hidden">
            Meet Blinki — your smart robo buddy! Lights up your day, keeps you
            focused, reminds you to stay healthy.{" "}
            <span className="text-blue-400">80+ motion effects</span> &
            interactive touch make every moment fun!
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
                Over{" "}
                <span className="text-blue-400">
                  80+ dynamic motion effects
                </span>{" "}
                and{" "}
                <span className="text-blue-400">Flexible intro starter </span>.
              </li>

              <li>
                Customizable sound effects for notifications, touch, and
                interactions.
              </li>
              <li>
                Interactive touch, swipe, and button controls — feed, play, or
                change mood.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 md:w-2/3 p-4 rounded-xl mt-4 sticky top-20 mx-auto border ">
        <div className="flex items-center justify-between">
          {/* Price Info */}
          <div className="flex items-end gap-3">
            <div>
              <div className="flex items-center gap-2 md:ml-4">
                <p className="md:text-2xl text-2xl font-bold text-green-400">
                  ₹949
                </p>
                <p className="text-gray-400 line-through md:text-lg">₹1799</p>
                <span className="md:text-sm text-xs font-semibold text-green-50 bg-opacity-20 px-2 py-1 rounded-md">
                  47% OFF
                </span>
              </div>
              <p className="text-gray-400 text-xs mt-1 md:ml-6">
                lunching price for limited time
              </p>
            </div>
          </div>

          {/* Buy Now Button */}
          {/* <Link to="/checkout">
            <button className="bg-green-600 hover:bg-green-700 md:px-14 md:mr-8 px-4 py-2 rounded-lg font-semibold text-sm transition-all">
              Buy Now
            </button>
          </Link> */}

   {/* Buy Now Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="bg-green-600 hover:bg-green-700 md:px-14 md:mr-8 px-4 py-2 rounded-lg font-semibold md:text-sm text-xs transition-all"
      >
        Interested
      </button>

      {/* Interest Modal */}
      <InterestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />




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
          {showMore
            ? "Hide Details"
            : "See more information about this product"}
        </button>
      </div>

      {/* Expanded Details */}
      {showMore && (
        <div
          id="descriptionblinki"
          className="md:w-3/4 mx-auto mt-4 transition-all duration-700 ease-in-out"
        >
          {/* Feature Section */}
          <div className="bg-gray-800 p-4 rounded-2xl mb-6">
            <h3 className="text-xl text-center font-bold mb-4 text-blue-400">
              Smart Interactive Features
            </h3>
            <div className="bg-gray-800 p-2 rounded-2xl mb-6">
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">
                    🎞 Over 80 Dynamic Motion Effects
                  </h4>
                  <p>
                    Bring Mochi to life with{" "}
                    <span className="text-blue-400">
                      80+ random motion effects
                    </span>{" "}
                    that make every expression feel natural and full of emotion.
                    Adjust the GIF speed, set custom pauses, and even explore{" "}
                    <span className="text-blue-400">
                      80 adorable negative moods
                    </span>{" "}
                    for realistic reactions.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">
                    🌟 Flexible Intro Starter
                  </h4>
                  <p>
                    Personalize every interaction! Choose from a collection of{" "}
                    <span className="text-blue-400">80+ unique intros</span>{" "}
                    that play when Mochi wakes up or responds. Mid-launch
                    switching lets you instantly change how Mochi greets you —
                    perfect for every mood or setting.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">
                    🔊 Customizable Sound Effects
                  </h4>
                  <p>
                    Make Mochi sound uniquely yours. Customize intro tones,
                    notification alerts, and touch or swipe responses. Whether
                    it’s a gentle chime or a fun melody,{" "}
                    <span className="text-blue-400">
                      every sound matches your vibe.
                    </span>
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-yellow-400">
                    ✋ Interactive Touch Control
                  </h4>
                  <p>
                    Mochi responds instantly to your{" "}
                    <span className="text-blue-400">
                      touch, swipe, or button controls
                    </span>
                    . You can even assign different actions for each gesture —
                    feed him, make him dance, or switch his mood. Every tap
                    feels like bonding with a real digital friend.
                  </p>
                </div>
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
                <span className="font-semibold">Model Number:</span> 622654xx
              </p>
              <p>
                <span className="font-semibold">Material:</span> ABS Plastic
              </p>
              <p>
                <span className="font-semibold">Color:</span> White & Black
              </p>
              <p>
                <span className="font-semibold">Battery:</span> 3.7V 350mAh
              </p>
              <p>
                <span className="font-semibold">Charging Time:</span> 50 min
              </p>
              <p>
                <span className="font-semibold">Play Time:</span> ~8 hours
              </p>
              <p>
                <span className="font-semibold">Weight:</span> 405g
              </p>
              <p>
                <span className="font-semibold">Size:</span> 8 × 5.5 × 4.2 cm
              </p>
              <p>
                <span className="font-semibold">Manufacturer:</span> MagicPupils
              </p>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-gray-800 p-6 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              Product Description
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Meet your child’s new smart learning buddy! This intelligent
              interactive robot is designed to make learning fun through play.
              It can talk, dance, walk, and sing — turning everyday moments into
              exciting discoveries for both boys and girls.
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
