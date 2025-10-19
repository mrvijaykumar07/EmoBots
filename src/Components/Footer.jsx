import { IonIcon } from "@ionic/react";
import { logoInstagram, logoLinkedin } from "ionicons/icons";
import { Link } from "react-router-dom";
 import { Phone, PhoneCall, Mail, MapPin } from "lucide-react";
const Footer = () => {
  return (
   <footer className="bg-gray-900 text-white py-10 px-4 md:px-16">
  <div className="container mx-auto grid  grid-cols-1 md:grid-cols-3 md:ml-20 gap-8 justify-center">
    {/* Company */}
    {/* <div>
      <h5 className="font-semibold mb-4 text-[#ba7b33]">
        <Link to="/resources/company">Company</Link>
      </h5>
      <ul className="space-y-2">
        <li><Link to="/resources/company/careers" className="hover:text-[#a65d03]">Careers</Link></li>
        <li><Link to="/resources/learn-more/getting-help" className="hover:text-[#a65d03]">Support</Link></li>
        <li><Link to="/partners/become-a-partner" className="hover:text-[#a65d03]">Become a Partner</Link></li>
      </ul>
    </div> */}

    {/* Resources */}
    <div className="hidden md:block"  >
      <h5 className="font-semibold mb-4 text-[#ba7b33]">
        <Link to="/resources">Resources</Link>
      </h5>
      <ul className="space-y-2">
        <li><Link to="/resources/stay-connected/news" className="hover:text-[#a65d03]">News</Link></li>
        <li><Link to="/resources/library" className="hover:text-[#a65d03]">Library</Link></li>
        <li><Link to="/resources/story" className="hover:text-[#a65d03]">Story</Link></li>
      </ul>
    </div>

{/* Location */}
<div className="flex flex-col items-center md:items-start">
  <h5 className="font-semibold mb-4 text-[#ba7b33]">Location</h5>
  <p className="text-sm leading-relaxed text-center md:text-left">
    infoCity, Patia<br />
    PIN - 751024<br />
    Bhubaneswar, Odisha<br />
    India
  </p>
</div>


{/* Contact */}
<div className="flex flex-col items-center md:items-start">
  <h5 className="font-semibold mb-4 text-[#ba7b33]">Contact Us</h5>

  <div className="text-sm leading-relaxed space-y-2 text-center md:text-left">
    <div className="flex items-center justify-center md:justify-start gap-2">
      <Phone className="w-4 h-4" />
      <span>9337-200-960</span>
    </div>

    <div className="flex items-center justify-center md:justify-start gap-2">
      <Mail className="w-4 h-4" />
      <a href="mailto:info.magicpupils@gmail.com" className="hover:text-[#a65d03]">
        info.magicpupils@gmail.com
      </a>
    </div>

    <div className="flex items-center justify-center md:justify-start gap-2">
      <Mail className="w-4 h-4" />
      <a href="mailto:magicpupils@zohomail.in" className="hover:text-[#a65d03]">
        magicpupils@zohomail.in
      </a>
    </div>
  </div>
</div>

  </div>

  {/* Bottom Note */}
  <div className="mt-10 border-t border-[#e0c097] pt-6 text-sm flex flex-wrap justify-between items-center">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h4 className="text-lg font-semibold text-center md:text-start">Get in touch</h4>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info.magicpupils@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          info.magicpupils@gmail.com
        </a>
      </div>

<ul className="flex gap-4 mt-4 md:mt-0">
  {[
    { icon: logoInstagram, url: "https://www.instagram.com/magic_pupils/" },
    { icon: logoLinkedin, url: "https://www.linkedin.com/in/magicpupils" },
  ].map((social, index) => (
    <li key={index}>
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-blue-400 transition"
      >
        <IonIcon icon={social.icon} />
      </a>
    </li>
  ))}
</ul>

    </div>
  </div>
</footer>

  );
};

export default Footer;
