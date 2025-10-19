import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,

} from "react-icons/fa";
const Resume = () => {
  return (
    <section className="bg-white py-20  text-black  border border-gray-800 ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold">BIJAYA KUMAR BEHERA</h2>
          <h4>Nayagarh, Odisha, India </h4>
        </div>
        {/* div links */}

        <div className="flex flex-row w-full  gap-6 justify-center items-center  mb-5 ">
          <a
            href="tel:+919876543210"
            className="hover:underline  flex items-center gap-2"
          >
            <FaPhone className="text-xl" />
            +91 9876543210
          </a>
          <a
            href="mailto:kumarbijaybehera@gmail.com"
            className="hover:underline flex items-center gap-2"
          >
            <FaEnvelope className="text-xl" />
            kumarbijaybehera@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent p-2 rounded-full hover:scale-110 transition flex items-center gap-2"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href="https://t.me/bijayakumar"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
            className="bg-transparent p-2 rounded-full hover:scale-110 transition flex items-center gap-2"
          >
            <FaTelegramPlane />
            Telegram
          </a>

          <a
            href="https://github.com/mrvijaykumar07"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="bg-transparent p-2 rounded-full hover:scale-110 transition flex items-center gap-2"
          >
            <FaGithub />
            GitHub
          </a>
        </div>

        {/* ------------------------------------Technical Skill-------------------------------- */}

        <div className="px-40 py-2">

          <h2 className="font-bold text-xl">TECHNICAL SKILLS</h2>

          <hr className="text-black bg-black h-1" />
          <div className="px-6">
            <p>
              <span> FrontEnd : </span>
              <span>
                {" "}
                JavaScript, React.js, Redux, HTML, CSS, Tailwind CSS, BootStrap
                ,Figma
              </span>
            </p>

            <p>
              <span> BackEnd : </span>
              <span> JavaScript, Node.js , Express.js , MongoDB, JAVA </span>
            </p>

            <p>
              <span> Core concepts: </span>
              <span>
                {" "}
                Collection Framework, OOPS (Object Oriented Programming){" "}
              </span>
            </p>
          </div>
        </div>

        {/* ------------------------------------Proojects-------------------------------- */}

        <div className="px-40 py-2">
          <h2 className="font-bold text-xl">PROJECTS</h2>

          <hr className="text-black bg-black h-1" />

          <div className="px-6">
            <h3 className="flex justify-between">
              <span className="underline  font-bold">MERN-AUTH</span>
              <span className="underline"> Live Demo</span>
            </h3>
            <p>
              <li>
                Developed a secure and scalable authentication application using
                the MERN stack , enabling efficient user management with
                seamless backend integration
              </li>
              <li>
                Integrated email OTP verification during registration to ensure
                secure account creation, along with account creation
                confirmation via email to enhance user trust and verification
              </li>
              <li>
                Implemented JWT-based authentication for protected routes and
                session management, and used Mongoose for efficient database
                operations with MongoDB
              </li>
              <li>
                Tech Stack: React.js, Tailwind CSS, Node.js, Express.js,
                MongoDB, Mongoose, JWT, Nodemailer
              </li>
            </p>
            <h3 className="flex justify-between">
              <span className="underline font-bold">DELISH FOOD SITE</span>
              <span className="underline">Live Demo</span>
            </h3>
            <p>
              <li>
                Developed a responsive food delivery web app using React.js with
                dynamic restaurant listings and real-time API integration.
              </li>
              <li>
                Built a powerful search feature allowing users to filter cities,
                location based on their preferences{" "}
              </li>
              <li>
                Utilized Context API for state management and React Router for
                seamless page navigation, enhancing user experience.
              </li>
              <li>Tech Stack:React.js, Tailwind CSS</li>
            </p>
            <h3 className="flex justify-between">
              <span className="underline font-bold">ODISHA MASALA</span>
              <span className="underline">Live Demo</span>
            </h3>
            <p>
              <li>
                Built a full-stack e-commerce platform using React, Node.js,
                Express.js, and MongoDB with user authentication and role-based
                access
              </li>
              <li>
                {" "}
                Developed Admin Dashboard to manage users, products, and orders,
                and User Dashboard for browsing, adding to cart, and purchasing
              </li>
              <li>
                Implemented a dynamic product management system with real-time
                updates in MongoDB for seamless performance.
              </li>
              <li>
                {" "}
                Tech Stack : React.js, Tailwind CSS, Node.js, Express, MongoDB
              </li>
            </p>
          </div>
        </div>
        {/* ------------------------------------Education-------------------------------- */}

        <div className="px-40 py-2">
          <h2  className="font-bold text-xl" >EDUCATION</h2>

          <hr className="text-black bg-black h-1" />
          <div className="px-6">
            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p>
                  MCA, Veer Surendra Sai University of Technology, Burla,
                  Sambalpur
                </p>
                <p>Master in Computer Application - CGPA - 7.73</p>
              </div>
              <div>
                <p>2023 – 2025</p>
                <p>Sambalpur, Odisha, India</p>
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div>
                {" "}
                <p>BSc, Utkal University ,Bhubaneswar, Odisha</p>
                <p>Bachelor in Science (Mathematics) - CGPA - 7.26</p>
              </div>
              <div>
                <p>2019 – 2022</p>
                <p>Bhubaneswar, Odisha, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------COding-------------------------------- */}

        <div className="px-40 py-2">
          <h2  className="font-bold text-xl" >CODING PLATFORMS</h2>

          <hr className="text-black bg-black h-1" />
          <div className="mx-6">
            <p> • Solved 120+ DSA Problems on GeeksforGeeks. </p>
            <p> • I scored 300+ on GeeksforGeeks. </p>
          </div>
        </div>

        {/* You can add more content here, like resume cards or download buttons */}
      </div>
    </section>
  );
};

export default Resume;
