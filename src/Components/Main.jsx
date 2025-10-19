import React from "react";

import BlinkBlink from "./BlinkBlink";

import Products from "./Products";

import ThankYou from "./ThankYou"
import LandingPage from "./LandingPage";
import TrackOrder from "./TrackOrder";

const Main = () => {
  return (
    <main className="bg-gray-900 text-white">
      <article>
        <LandingPage/>

        <BlinkBlink />
        <Products />
<TrackOrder/>
        <ThankYou/>
      </article>
    </main>
  );
};

export default Main;
