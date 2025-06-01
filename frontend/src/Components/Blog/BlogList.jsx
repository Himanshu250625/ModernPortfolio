import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useBlog } from '../../context/BlogContext';

const BlogList = () => {
  const { blogPosts } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    'All',
    'Web Development',
    'Backend',
    'Frontend',
    'DevOps',
    'Career',
    'Technology',
    'Programming'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || selectedCategory === '' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-base-content">Blog</h1>
        <Link
          to="/blog/create"
          className="flex items-center px-4 py-2 bg-primary text-primary-content rounded-lg hover:bg-primary-focus transition-colors"
        >
          <FaPlus className="mr-2" />
          Create Post
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-base-200 text-base-content border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FaSearch className="absolute left-3 top-3 text-base-content opacity-70" />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 bg-base-200 text-base-content border border-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="bg-base-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-primary/20 text-primary text-sm rounded">
                  {post.category}
                </span>
                <span className="text-base-content/70 text-sm">
                  {post.readTime}
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 text-base-content">{post.title}</h2>
              <p className="text-base-content/80 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-base-300 text-base-content/80 text-sm rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-base-content/70">No posts found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default BlogList; 