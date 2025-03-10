import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const BlogContext = createContext();

export function useBlog() {
  return useContext(BlogContext);
}

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const apiUrl = 'http://localhost:3000/api';

  const fetchPosts = async () => {
    const response = await axios.get(`${apiUrl}/posts`);
    setPosts(response.data);
  };

  const getPost = async (id) => {
    const response = await axios.get(`${apiUrl}/posts/${id}`);
    return response.data;
  };

  const createPost = async (postData) => {
    const response = await axios.post(`${apiUrl}/posts`, postData);
    setPosts([response.data, ...posts]);
    return response.data;
  };

  const updatePost = async (id, postData) => {
    const response = await axios.put(`${apiUrl}/posts/${id}`, postData);
    setPosts(posts.map(post => post._id === id ? response.data : post));
    return response.data;
  };

  const deletePost = async (id) => {
    await axios.delete(`${apiUrl}/posts/${id}`);
    setPosts(posts.filter(post => post._id !== id));
  };

  const value = {
    posts,
    fetchPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
}