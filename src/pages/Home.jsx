// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import PackageCard from '../components/PackageCard';
import BlogTeaser from '../components/BlogTeaser';
import FAQ from '../components/FAQ';
import packages from '../data/Packages.js';
import blogs from '../data/Blog.js';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>TravelCo - Explore India</title>
        <meta name="description" content="Discover affordable travel packages and plan your next adventure with TravelCo." />
      </Helmet>

      <HeroSlider />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-10 tracking-tight">
            Popular Packages
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {packages.filter(pkg => pkg.featured).map(pkg => (
  <PackageCard key={pkg.id} {...pkg} />
))}
          </div>

          {/* PREMIUM BUTTON */}
          <div className="mt-12">
            <Link
              to="/packages"
              className="inline-block px-8 py-3 text-lg font-semibold text-white 
              bg-gradient-to-r from-blue-600 to-indigo-600 
              rounded-full shadow-lg hover:shadow-xl 
              hover:scale-105 transition-all duration-300"
            >
              View All Packages →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Travel Tips Blog</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs.map(blog => (
              <BlogTeaser key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </>
  );
}