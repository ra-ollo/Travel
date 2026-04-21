// src/components/BlogTeaser.jsx
import { Link } from 'react-router-dom';

export default function BlogTeaser({ id, title, snippet, image }) {
  return (
    <div className="mx-auto w-[92%] sm:w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">

      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-5">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>

        <p className="text-gray-600 text-sm">{snippet}</p>

        <Link
          to={`/blog/${id}`}
          className="mt-4 inline-block text-indigo-600 font-medium hover:underline"
        >
          Read Full Article →
        </Link>
      </div>
    </div>
  );
}