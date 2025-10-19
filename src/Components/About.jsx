import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
  FaUniversity,
  FaBookOpen,
  FaAddressCard,
  FaPaintBrush,
  FaPen,
  FaCamera,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import TrackOrder from "./TrackOrder";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
<TrackOrder/>
      
      <div className="text-center mb-6">
        <p className="text-lg text-blue-400">Thank You</p>
        <h2 className="text-3xl font-bold my-4 items-center">
          For Visit our site
        </h2>
      </div>


    </section>
  );
};

export default About;
