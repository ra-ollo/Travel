// src/pages/Packages.jsx
import { Helmet } from 'react-helmet-async';
import PackageCard from '../components/PackageCard';
import packages from '../data/Packages.js';

export default function Packages() {
  return (
    <>
      <Helmet><title>Our Packages | TravelCo</title></Helmet>
      <div className="max-w-4xl mx-auto my-16 px-4">
        <h1 className="text-3xl font-heading font-bold mb-6">Tour Packages</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </>
  );
}
