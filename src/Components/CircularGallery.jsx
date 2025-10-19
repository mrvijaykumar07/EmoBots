import React, { useState } from "react";

  const images = [
    "/assets/images/blinkBlinkWithBg.jpg",
    "/assets/images/blinkBlinkWithBg.jpg",
    "/assets/images/blinkBlinkWithBg.jpg",
    "/assets/images/blinkBlinkWithBg.jpg",
  ];

const CircularGallery = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex justify-center items-center h-66 bg-gray-900 gap-8 relative">
      {/* Main Circular Image */}
      <div className="relative">
        <img
          src={mainImage}
          alt="Main Robot"
          className="w-66 h-64  object-contain border-2 border-grey-800 shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Vertical Thumbnails */}
      <div className="flex flex-col gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Robot ${index}`}
            className={`w-12 h-12 rounded-full cursor-pointer border-2 transition-all duration-300 hover:scale-110 ${
              mainImage === img
                ? " border-grey-800   shadow-md"
                : "border-transparent"
            }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default CircularGallery;
