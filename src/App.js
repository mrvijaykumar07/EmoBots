import React from "react";
import "./index.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Product from "./Components/Products";
import BlinkBlink from "./Components/BlinkBlink";
import Checkout from "./Components/Checkout";
import TrackOrder from "./Components/TrackOrder";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Independent Checkout Route (no header/footer) */}
        <Route path="/checkout" element={<Checkout />} />
<Route path="/track" element={<TrackOrder/>} />
        {/* All other routes with header/footer */}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Product />} />
                <Route path="/blinki" element={<BlinkBlink />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
