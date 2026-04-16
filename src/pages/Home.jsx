// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async';
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

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Popular Packages</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {packages.map(pkg => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Travel Tips Blog</h2>
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
