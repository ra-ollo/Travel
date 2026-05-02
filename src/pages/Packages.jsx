// src/pages/Packages.jsx
import { Helmet } from 'react-helmet-async';
import PackageCard from '../components/PackageCard';
import packages from '../data/Packages.js';

export default function Packages() {
  return (
    <>
      <Helmet>
        <title>Our Packages | Pawan Hans Limited</title>
      </Helmet>

      <div className="max-w-7xl mx-auto my-20 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Tour Packages
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {packages.map(pkg => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </>
  );
}