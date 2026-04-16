// src/components/PackageCard.jsx
export default function PackageCard({ title, days, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-1">{title}</h3>
        <p className="text-gray-600">{days}</p>
        <p className="mt-2 text-blue-600 font-bold">₹{price}</p>
      </div>
    </div>
  );
}
