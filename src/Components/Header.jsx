import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-500 shadow-lg z-50 px-4 md:px-44">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo (Left Side) */}
        <Link to="/" className="text-xl font-extrabold text-gray-900">
          <img
            src="/assets/images/logo.png"
            alt="Pfolio home"
            className="w-36"
          />
        </Link>
        <nav className="hidden md:flex space-x-6 text-white font-medium">
          <a href="#home" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#blinki" className="hover:text-blue-600 transition">
            Products
          </a>

          <a href="#thankyou" className="hover:text-blue-600 transition">
            Contact
          </a>

          <a href="#track" className="hover:text-blue-600 transition">
            Track Order
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="w-6 h-[18px] flex flex-col gap-1 justify-between items-center md:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          <span
          onClick={() => setNavOpen(!navOpen)}
            className={`w-5 h-0.5 bg-white transition-transform ${
              navOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
          onClick={() => setNavOpen(!navOpen)}
            className={`w-5 h-0.5 bg-white ${navOpen ? "hidden" : ""}`}
          />
          <span
          onClick={() => setNavOpen(!navOpen)}
            className={`w-5 h-0.5 bg-white transition-transform ${
              navOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navbar */}
{/* Mobile Navbar */}
<nav
  className={`md:hidden absolute top-14 left-0 w-full bg-gray-800 text-white shadow-lg transition-all ${
    navOpen ? "block" : "hidden"
  }`}
>
  <ul className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
    <li>
      <a
        href="#home"
        className="hover:text-blue-400 transition"
        onClick={() => setNavOpen(false)}
      >
        Home
      </a>
    </li>
    <li>
      <a
        href="#blinki"
        className="hover:text-blue-400 transition"
        onClick={() => setNavOpen(false)}
      >
        Products
      </a>
    </li>
    <li>
      <a
        href="#thankyou"
        className="hover:text-blue-400 transition"
        onClick={() => setNavOpen(false)}
      >
        Contact
      </a>
    </li>
    <li>
      <a
        href="#track"
        className="hover:text-blue-400 transition"
        onClick={() => setNavOpen(false)}
      >
        Track Order
      </a>
    </li>
  </ul>
</nav>

    </header>
  );
};

export default Header;
