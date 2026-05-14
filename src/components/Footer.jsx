// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">

        {/* Brand Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">
            CX Char Dham Yatra
          </h3>

          <p>
            Spiritual journeys across Uttarakhand with trusted
            Char Dham travel assistance.
          </p>

          <p className="mt-4 text-sm">
            © 2026 CX Char Dham Yatra. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">
            Quick Links
          </h4>

          <ul className="space-y-2">

            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link to="/packages" className="hover:underline">
                Packages
              </Link>
            </li>

            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms-conditions" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>

            <li>
              <Link to="/refund-policy" className="hover:underline">
                Cancellation & Refund Policy
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-2">
            Contact Us
          </h4>

          <p>
            Phone:
            <a
              href="tel:+919884420534"
              className="hover:underline ml-1"
            >
              +91 98844 20534
            </a>
          </p>

          <p className="mt-2">
            Email:
            <a
              href="mailto:support@cxchardham.online"
              className="hover:underline ml-1"
            >
              support@cxchardham.online
            </a>
          </p>

          <div className="mt-4">
            <a
              href="https://wa.me/919884420534"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}