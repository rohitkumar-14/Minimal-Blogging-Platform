import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext";
import { format } from "date-fns";

function PostList() {
  const { posts, fetchPosts, deletePost } = useBlog();

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section class="hero bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 text-center">
        <div class="max-w-3xl mx-auto px-6">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            Discover Inspiring Stories & Insights
          </h1>
          <p class="text-lg text-slate-200 mb-6">
            Explore thought-provoking articles, expert opinions, and the latest
            trends in the blogging world.
          </p>
          <a
            href="#latest-posts"
            class="bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-slate-100 transition-all">
            Read Latest Posts
          </a>
        </div>
      </section>
      <section id="latest-posts">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent my-8">Latest Blogs</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-slate-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-semibold">
                    {post.author[0].toUpperCase()}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-slate-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-slate-500">
                      {format(new Date(post.createdAt), "MMM d, yyyy")}
                    </p>
                  </div>
                </div>
                <Link to={`/posts/${post._id}`} className="block group">
                  <h2 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors duration-150">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 line-clamp-3 mb-4">
                    {post.content}
                  </p>
                </Link>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <Link
                    to={`/posts/${post._id}`}
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors duration-150">
                    Read more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                  <div className="flex space-x-3">
                    <Link
                      to={`/edit/${post._id}`}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150">
                      Edit
                    </Link>
                    <button
                      onClick={() => deletePost(post._id)}
                      className="text-sm text-red-500 hover:text-red-700 transition-colors duration-150">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}

export default PostList;
