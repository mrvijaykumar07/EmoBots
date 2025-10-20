import React from "react";

const Photosection = () => {
  return (
    <section
      id="home"
      className="hero bg-gray-800  mx-auto flex w-full h-screen pb-20  md:px-44"
    >
      <div className="flex flex-col  justify-start container ">
        <div className=" w-screen h-full flex items-center justify-center ">
          <img
            src="/assets/images/mobileBanner.jpg"
            alt="Bijaya Kumar"
            className=" w-96 h-[240px] object-cover  md:hidden mb-3 "
          />
        </div>

        <div className="flex flex-col  justify-center container  px-6">
          <h1 className="md:text-2xl text-xl font-bold mb-3">
            Representing....
          </h1>
          <h1 className="md:text-6xl text-5xl font-bold mb-3"> MagicPupils</h1>
          <p className="text-xl text-gray-50 font-bold">
            Cute Mini Robooos
          </p>

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

            <a href="#blinki" className="w-auto mt-6 inline-flex items-center bg-blue-600 md:px-10 px-5 py-2 rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition font-bold">
  <span className="mr-2">Visit Store</span>
</a>

          </div>
        </div>
      </div>

      <div className="mt-8">
        <img
          src="/assets/images/blinkiGif.gif"
          alt="Bijaya Kumar"
          className="rounded-full w-[820px] h-[420px] object-cover  hidden md:block "
        />
      </div>
    </section>
  );
};

export default Photosection;
