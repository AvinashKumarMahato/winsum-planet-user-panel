import React, { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) return `${interval} years ago`;
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return `${interval} months ago`;
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return `${interval} days ago`;
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return `${interval} h ago`;
    interval = Math.floor(seconds / 60);
    if (interval > 1) return `${interval} min ago`;
    return `${Math.max(1, seconds)} sec ago`; // Ensure we don't show 0 seconds
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/getBlogPosts`);

        // Sort posts by date (newest first)
        const sortedPosts = response.data.sort((a, b) =>
          new Date(b.createdAt) - new Date(a.createdAt)
        );

        setPosts(sortedPosts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleReadMore = (postId) => {
    navigate(`/blogPost/${postId}`);
  };

  const getExcerpt = (post) => {
    if (post.excerpt) return post.excerpt;

    try {
      // Attempt to parse content as JSON if it's a string and not already an object
      const contentObj = typeof post.content === 'string' ? JSON.parse(post.content) : post.content;

      // Check if contentObj contains structured content (assuming it’s in a common editor format like Draft.js or similar)
      if (contentObj && contentObj.content) {
        const firstParagraph = contentObj.content.find((node) => node.type === 'paragraph');
        return firstParagraph?.content?.[0]?.text?.substring(0, 150) + '...' || 'No preview available';
      }

      // Fall back to using content as plain text
      return typeof post.content === 'string' ? post.content.substring(0, 150) + '...' : 'No preview available';
    } catch {
      return 'No preview available';
    }
  };


  // Pagination logic
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="w-8 h-8 animate-spin text-primary-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Blog</h2>
          <p className="text-gray-600 md:text-lg">
            Explore expert advice, industry insights, and latest updates on walk-in job drives to enhance your career journey.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center text-gray-600">
            No blog posts available at the moment.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post) => (
                <div key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {getExcerpt(post)}
                    </p>
                    <p className="text-gray-500 text-sm mb-4">
                      {timeAgo(post.createdAt)}
                    </p>
                    <button
                      onClick={() => handleReadMore(post._id)}
                      className="text-primary-500 hover:text-primary-700 font-semibold inline-flex items-center"
                    >
                      Read More <span className="ml-1">&rarr;</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {posts.length > postsPerPage && (
              <div className="flex justify-center items-center mt-12">
                <Pagination
                  totalPosts={posts.length}
                  postsPerPage={postsPerPage}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
