// src/pages/Blog.jsx
import { Helmet } from 'react-helmet-async';
import BlogTeaser from '../components/BlogTeaser';
import blogs from '../data/Blog.js';

export default function Blog() {
  return (
    <>
      <Helmet><title>Travel Blog | TravelCo</title></Helmet>
      <div className="max-w-4xl mx-auto my-16 px-4">
        <h1 className="text-3xl font-heading font-bold mb-6">Our Blog</h1>
        <div className="space-y-8">
          {blogs.map(blog => (
            <BlogTeaser key={blog.id} {...blog} />
          ))}
        </div>
      </div>
    </>
  );
}
