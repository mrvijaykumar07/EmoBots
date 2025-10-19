import React from "react";
import "./index.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
