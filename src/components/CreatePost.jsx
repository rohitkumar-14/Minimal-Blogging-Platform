import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

function CreatePost() {
  const navigate = useNavigate();
  const { createPost } = useBlog();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost(formData);
      navigate('/');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">Create New Post</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-slate-700">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-150"
                placeholder="Enter your post title"
                required
              />
            </div>
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-slate-700">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-150"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-slate-700">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows="12"
                className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-colors duration-150"
                placeholder="Write your post content here..."
                required
              />
            </div>
            <div className="flex items-center justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-150"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 shadow-sm transition-all duration-150 ease-in-out"
              >
                Publish Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;