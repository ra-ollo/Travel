// src/components/PackageCard.jsx
import { Link } from 'react-router-dom';
import { FaHotel, FaUtensils, FaCar, FaMapMarkedAlt } from 'react-icons/fa';

export default function PackageCard({ title, days, price, image, inclusions = [], featured }) {
  return (
    <div className="mx-auto w-[92%] sm:w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden group">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-105 transition duration-500"
        />

        {/* SMART TAGS */}
        {featured && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
            Trending
          </span>
        )}

        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
          Best Seller
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg leading-snug mb-1 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mb-4">{days}</p>

        {/* ICONS */}
        <div className="flex justify-between text-gray-500 text-xs mb-5">
          <div className="flex flex-col items-center gap-1">
            <FaHotel className="text-blue-500 text-lg" />
            Hotels
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaUtensils className="text-orange-500 text-lg" />
            Meals
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaMapMarkedAlt className="text-green-500 text-lg" />
            Tour
          </div>
          <div className="flex flex-col items-center gap-1">
            <FaCar className="text-red-500 text-lg" />
            Cabs
          </div>
        </div>

        <div className="border-t my-4"></div>

        {/* INCLUSIONS */}
        <ul className="text-sm text-gray-600 space-y-1 mb-4">
          {inclusions.slice(0, 4).map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-blue-500">✔</span>
              {item}
            </li>
          ))}
        </ul>

        {/* PRICE */}
        <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-3 rounded-xl">
          <span className="font-bold">₹{price}/- pp</span>
          <Link
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className="bg-white text-indigo-600 px-4 py-1.5 rounded-full text-sm font-semibold hover:scale-105 transition inline-block">
          Book Now
        </Link>
        </div>
      </div>
    </div>
  );
}