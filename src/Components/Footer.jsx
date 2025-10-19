import { IonIcon } from "@ionic/react";
import { logoInstagram, logoLinkedin } from "ionicons/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <footer className="bg-gray-800 text-white py-6 px-4 md:px-16">
  <div className="container mx-auto grid  grid-cols-2 md:grid-cols-4 gap-8">
    {/* Company */}
    <div>
      <h5 className="font-semibold mb-4 text-[#ba7b33]">
        <Link to="/resources/company">Company</Link>
      </h5>
      <ul className="space-y-2">
        <li><Link to="/resources/company/careers" className="hover:text-[#a65d03]">Careers</Link></li>
        <li><Link to="/resources/learn-more/getting-help" className="hover:text-[#a65d03]">Support</Link></li>
        <li><Link to="/partners/become-a-partner" className="hover:text-[#a65d03]">Become a Partner</Link></li>
      </ul>
    </div>

    {/* Resources */}
    <div>
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
    <div>
      <h5 className="font-semibold mb-4 text-[#ba7b33]">Location</h5>
      <p className="text-sm leading-relaxed">
        infoCity, Patia<br />
        PO Box 752070<br />
        Bhubaneswar, Odisha<br />
        India
      </p>
    </div>

    {/* Contact */}
    <div>
      <h5 className="font-semibold mb-4 text-[#ba7b33]">Contact Us</h5>
      <p className="text-sm leading-relaxed">
        <span className="font-bold">t.</span> 0000-000-000<br />
        <span className="font-bold">p.</span> 7854-001-224<br />
        <span className="font-bold">e.</span>{" "}
        <a href="mailto:info@emobot.com" className="hover:text-[#a65d03]">
          info@emobot.com
        </a>
      </p>
    </div>
  </div>

  {/* Bottom Note */}
  <div className="mt-10 border-t border-[#e0c097] pt-6 text-sm flex flex-wrap justify-between items-center">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div>
        <h4 className="text-lg font-semibold">Get in touch</h4>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=kumarbijaybehera07@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline"
        >
          emobot@gmail.com
        </a>
      </div>

      <ul className="flex gap-4 mt-4 md:mt-0">
        {[
          { icon: logoInstagram, url: "https://www.instagram.com/emobot/" },
          { icon: logoLinkedin, url: "https://www.linkedin.com/in/emobot" },
        ].map((social, index) => (
          <li key={index}>
            <a href={social.url} className="text-xl hover:text-blue-400 transition">
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
