// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">TravelCo</h3>
          <p>© 2026 TravelCo. All rights reserved.</p>
          <p className="mt-4">Follow us:</p>
          <div className="flex space-x-4 mt-2">
            {/* Example social icons (replace with actual links/icons) */}
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/packages" className="hover:underline">Packages</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>Phone: <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a></p>
          <p>Email: <a href="mailto:info@travelco.com" className="hover:underline">info@travelco.com</a></p>
          <div className="mt-3">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" rel="noopener noreferrer"
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
