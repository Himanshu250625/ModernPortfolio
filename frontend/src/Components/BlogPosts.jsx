import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogPosts = () => {
  const { blogPosts } = useBlog();
  const recentPosts = blogPosts.slice(0, 3); // Get the 3 most recent posts

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-700">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-blue-900 text-blue-200 text-sm rounded">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-2 mb-3 text-white">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags?.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-sm rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-block text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts; 