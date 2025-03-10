import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';
import { format } from 'date-fns';

function PostDetail() {
  const { id } = useParams();
  const { getPost } = useBlog();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const data = await getPost(id);
      setPost(data);
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse bg-white rounded-xl p-8">
          <div className="h-8 bg-slate-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-slate-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
            <div className="h-4 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{post.title}</h1>
          <div className="flex items-center mb-8">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
              {post.author[0].toUpperCase()}
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium text-slate-900">{post.author}</p>
              <p className="text-slate-500">{format(new Date(post.createdAt), 'MMMM d, yyyy')}</p>
            </div>
          </div>
          <div className="prose prose-slate max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex items-center space-x-4 mt-8 pt-8 border-t border-slate-200">
            <Link
              to={`/edit/${post._id}`}
              className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-150"
            >
              Edit Post
            </Link>
            <Link
              to="/"
              className="text-slate-600 hover:text-slate-900 font-medium transition-colors duration-150"
            >
              ← Back to Posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default PostDetail;