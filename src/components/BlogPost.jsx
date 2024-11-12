import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';

const BlogPost = ({ preview = false }) => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/blogPosts/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching the post:', error);
        setError('Failed to load the blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const getExcerpt = (post) => {
    if (!post) return 'No preview available';
    
    // If there's a dedicated excerpt, use it
    if (post.excerpt) return post.excerpt;

    try {
      let contentObj;
      
      // Parse content if it's a string
      if (typeof post.content === 'string') {
        contentObj = JSON.parse(post.content);
      } else {
        contentObj = post.content;
      }

      // Handle Tiptap JSON structure
      if (contentObj?.type === 'doc' && Array.isArray(contentObj.content)) {
        // Find the first paragraph
        const firstParagraph = contentObj.content.find(node => node.type === 'paragraph');
        
        if (firstParagraph?.content) {
          // Extract text from the paragraph's content
          const text = firstParagraph.content.reduce((acc, curr) => {
            if (curr.type === 'text') {
              return acc + curr.text;
            }
            return acc;
          }, '');
          
          return text.length > 150 ? `${text.substring(0, 150)}...` : text;
        }
      }
      
      // Fallback for plain text content
      if (typeof contentObj === 'string') {
        return contentObj.length > 150 ? `${contentObj.substring(0, 150)}...` : contentObj;
      }
      
      return 'No preview available';
    } catch (error) {
      console.error('Error generating excerpt:', error);
      return 'No preview available';
    }
  };

  const renderNodeContent = (node) => {
    if (!node.content) return '';
    return node.content.map((contentNode, index) => {
      if (contentNode.type === 'text') {
        let text = contentNode.text;
        if (contentNode.marks) {
          contentNode.marks.forEach(mark => {
            switch (mark.type) {
              case 'bold':
                text = <strong key={index}>{text}</strong>;
                break;
              // Add more mark types as needed
            }
          });
        }
        return text;
      }
      return renderNodeContent(contentNode);
    });
  };

  const renderContent = (content) => {
    try {
      if (typeof content === 'string') {
        content = JSON.parse(content);
      }

      if (content && content.type === 'doc' && Array.isArray(content.content)) {
        // If preview mode, only render the first paragraph
        const contentToRender = preview 
          ? content.content.slice(0, 1) 
          : content.content;

        return contentToRender.map((node, index) => {
          switch (node.type) {
            case 'paragraph':
              const alignment = node.attrs?.textAlign || 'left';
              return (
                <p 
                  key={index} 
                  className={`mb-4 text-${alignment}`}
                >
                  {renderNodeContent(node)}
                </p>
              );
            case 'heading':
              const HeadingTag = `h${node.attrs?.level || 1}`;
              return (
                <HeadingTag 
                  key={index} 
                  className="font-bold my-4"
                >
                  {renderNodeContent(node)}
                </HeadingTag>
              );
            default:
              return null;
          }
        });
      }
      return <div className="prose max-w-none">Unable to render content</div>;
    } catch (error) {
      console.error('Error rendering content:', error);
      return <div className="prose max-w-none">Error rendering content</div>;
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-gray-600">Post not found</div>
      </div>
    );
  }

  // Preview mode layout
  if (preview) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {post.title}
        </h2>
        <div className="text-gray-500 text-sm mb-4">
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </div>
        <div className="prose prose-sm mb-4">
          {getExcerpt(post)}
        </div>
        <button
          onClick={() => navigate(`/blog/${post._id}`)}
          className="text-primary-500 hover:text-primary-700 font-semibold"
        >
          Read more →
        </button>
      </div>
    );
  }

  // Full post layout
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="container mx-auto max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <button
          onClick={() => navigate(-1)}
          className="text-primary-500 hover:text-primary-700 font-semibold mb-6 inline-flex items-center"
        >
          <span>&larr;</span>
          <span className="ml-2">Back to Blog</span>
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        <div className="text-gray-500 text-sm mb-8">
          <time dateTime={post.createdAt}>{formatDate(post.createdAt)}</time>
        </div>

        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;