import React from "react";

import BlinkBlink from "./BlinkBlink";

import Products from "./Products";
import About from "./About";
import LandingPage from "./LandingPage";

const Main = () => {
  return (
    <main className="bg-gray-900 text-white">
      <article>
        <LandingPage/>

        <BlinkBlink />
        <Products />

        <About />
      </article>
    </main>
  );
};

export default Main;
