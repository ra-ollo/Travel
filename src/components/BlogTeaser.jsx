// src/components/BlogTeaser.jsx
export default function BlogTeaser({ title, snippet, image, link }) {
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-gray-600 mt-2">{snippet}</p>
        <a href={link} className="mt-3 inline-block text-blue-500 hover:underline">
          Read more &rarr;
        </a>
      </div>
    </div>
  );
}
