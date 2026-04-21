import { useParams } from 'react-router-dom';
import blogs from '../data/Blog.js';
export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <div className="text-center py-20">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-2xl mb-10 shadow-lg"
      />

      <h1 className="text-4xl font-bold mb-6 leading-tight">
        {blog.title}
      </h1>

      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>

    </div>
  );
}