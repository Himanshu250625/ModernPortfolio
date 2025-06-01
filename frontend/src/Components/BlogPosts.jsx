import React from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogPosts = () => {
  const { blogPosts } = useBlog();
  const recentPosts = blogPosts.slice(0, 3); // Get the 3 most recent posts

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-base-content">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <div key={post.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              {post.image && (
                <figure>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                </figure>
              )}
              <div className="card-body">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-primary">{post.category}</span>
                  <span className="text-sm text-base-content/70">{post.readTime}</span>
                </div>
                <h3 className="card-title text-base-content">{post.title}</h3>
                <p className="text-base-content/80 line-clamp-2">{post.excerpt}</p>
                <div className="card-actions justify-between items-center mt-4">
                  <span className="text-sm text-base-content/70">{post.date}</span>
                  <Link to={`/blog/${post.id}`} className="btn btn-primary btn-sm">
                    Read More
                  </Link>
                </div>
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