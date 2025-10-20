import React from "react";

import BlinkBlink from "./BlinkBlink";

import Products from "./Products";

import ThankYou from "./ThankYou";
import LandingPage from "./LandingPage";
import TrackOrder from "./TrackOrder";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <main className="bg-gray-900 text-white h-screen">
      <Header/>
      <article>
        <LandingPage />

        <BlinkBlink />
        <Products />
        <TrackOrder />
        <ThankYou />
      </article>
      <Footer/>
    </main>
  );
};

export default Main;
