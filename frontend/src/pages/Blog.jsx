import React from 'react';
import { FaCode, FaLaptopCode, FaRobot, FaDatabase, FaMobileAlt, FaCloud } from 'react-icons/fa';

const Blog = () => {
  const categories = [
    { icon: <FaCode />, title: 'Web Development', count: 12 },
    { icon: <FaLaptopCode />, title: 'Programming', count: 8 },
    { icon: <FaRobot />, title: 'AI & ML', count: 5 },
    { icon: <FaDatabase />, title: 'Database', count: 6 },
    { icon: <FaMobileAlt />, title: 'Mobile Dev', count: 4 },
    { icon: <FaCloud />, title: 'Cloud & DevOps', count: 7 },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] py-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-['Playfair_Display']">
            Tech <span className="text-primary">Insights</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-['Inter']">
            Exploring the latest trends in technology, programming, and digital innovation
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#1a1a24] p-6 rounded-xl hover:bg-[#23232f] transition-all duration-300 cursor-pointer group"
            >
              <div className="text-primary text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-white font-['Inter'] font-medium mb-1">{category.title}</h3>
              <p className="text-gray-400 text-sm">{category.count} articles</p>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="bg-[#1a1a24] rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-['Playfair_Display']">Featured Posts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#23232f] rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-[#2a2a35] rounded-lg mb-4"></div>
              <span className="text-primary text-sm font-medium">Web Development</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3 font-['Inter']">
                The Future of Web Development in 2024
              </h3>
              <p className="text-gray-400 mb-4">
                Exploring upcoming trends and technologies that will shape the future of web development...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">March 15, 2024</span>
                <button className="text-primary hover:text-primary-focus transition-colors">
                  Read More →
                </button>
              </div>
            </div>
            <div className="bg-[#23232f] rounded-xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="aspect-video bg-[#2a2a35] rounded-lg mb-4"></div>
              <span className="text-primary text-sm font-medium">AI & ML</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-3 font-['Inter']">
                Understanding Machine Learning Basics
              </h3>
              <p className="text-gray-400 mb-4">
                A comprehensive guide to getting started with machine learning and artificial intelligence...
              </p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">March 12, 2024</span>
                <button className="text-primary hover:text-primary-focus transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-['Playfair_Display']">Stay Updated</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest articles and updates directly in your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-[#1a1a24] border-primary/30 text-white"
            />
            <button className="btn btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog; 