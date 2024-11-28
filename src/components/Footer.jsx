import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* E-Shop Section */}
        <div className="transform transition-all duration-300 hover:scale-105">
          <h2 className="text-xl font-bold mb-4">e-Shop</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for all your needs. Shop with us and experience
            the best online shopping experience.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-sm hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.facebook.com/saleh.hossam.988/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-125 hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-125 hover:text-blue-400"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/saleh-hossam-a3a063256/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-125 hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="tel:+201011073975"
              className="transform transition-all duration-300 hover:scale-125 hover:text-green-500"
            >
              <FaPhone size={20} />
            </a>
          </div>

          {/* Subscribe Form */}
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-slate-800 text-sm rounded-l px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button className="bg-red-600 text-white px-4 py-2 rounded-r transform transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 e-Shop. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
