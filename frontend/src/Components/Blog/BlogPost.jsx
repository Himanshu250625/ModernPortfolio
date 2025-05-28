import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import { useBlog } from '../../context/BlogContext';
import Comments from './Comments';
import SocialShare from './SocialShare';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogPost, deleteBlogPost } = useBlog();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  const post = getBlogPost(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
          <Link
            to="/blog"
            className="text-primary hover:text-primary-focus"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    deleteBlogPost(id);
    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blog')}
          className="flex items-center text-gray-300 hover:text-white mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back to Blog
        </button>

        {/* Post Header */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-white">{post.title}</h1>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="text-red-400 hover:text-red-300"
            >
              <FaTrash />
            </button>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
              {post.category}
            </span>
            <span className="text-gray-400">{post.readTime}</span>
            <span className="text-gray-400">{post.date}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg mb-8">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Post Content */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg mb-8">
          <div
            className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-primary prose-code:text-primary prose-pre:bg-[#23232f] prose-pre:text-gray-300 prose-blockquote:text-gray-400 prose-blockquote:border-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg mb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#23232f] text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-lg text-white">{post.author.name}</h3>
              <p className="text-gray-400">{post.author.bio}</p>
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg mb-8">
          <SocialShare
            title={post.title}
            url={window.location.href}
          />
        </div>

        {/* Comments */}
        <div className="bg-[#1a1a24] p-8 rounded-lg shadow-lg">
          <Comments postId={id} />
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title={post.title}
      />
    </div>
  );
};

export default BlogPost; 