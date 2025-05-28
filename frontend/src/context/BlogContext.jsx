import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the basics of React and how to create your first component...",
      category: "Web Development",
      tags: ["React", "JavaScript", "Frontend"],
      date: "2024-03-15",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>React is a popular JavaScript library for building user interfaces. In this article, we'll explore the basics of React and how to get started with your first component.</p>
        
        <h2>What is React?</h2>
        <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you create reusable UI components.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Component-based architecture</li>
          <li>Virtual DOM for better performance</li>
          <li>One-way data flow</li>
          <li>JSX syntax</li>
        </ul>

        <h2>Getting Started</h2>
        <p>To start using React, you'll need to have Node.js installed on your computer. Then, you can create a new React project using Create React App:</p>
        
        <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    },
    {
      id: 2,
      title: "Understanding Node.js",
      excerpt: "A comprehensive guide to Node.js and its ecosystem...",
      category: "Backend",
      tags: ["Node.js", "JavaScript", "Backend"],
      date: "2024-03-10",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>Node.js is a powerful JavaScript runtime that allows you to build scalable network applications.</p>
        
        <h2>Why Node.js?</h2>
        <p>Node.js is perfect for building fast, scalable network applications. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.</p>

        <h2>Key Features</h2>
        <ul>
          <li>Asynchronous and Event-Driven</li>
          <li>Single-threaded but Highly Scalable</li>
          <li>Cross-platform</li>
          <li>NPM (Node Package Manager)</li>
        </ul>

        <h2>Getting Started</h2>
        <p>To start using Node.js, download and install it from the official website. Then, create your first server:</p>
        
        <pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});</code></pre>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    },
    {
      id: 3,
      title: "Modern CSS Techniques",
      excerpt: "Explore modern CSS features and best practices for better styling...",
      category: "Frontend",
      tags: ["CSS", "Web Design", "Frontend"],
      date: "2024-03-08",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>Modern CSS has evolved significantly, offering powerful features for creating beautiful and responsive designs.</p>
        
        <h2>CSS Grid Layout</h2>
        <p>CSS Grid is a two-dimensional layout system that makes it easy to create complex web layouts.</p>

        <h2>Flexbox</h2>
        <p>Flexbox is a one-dimensional layout method for arranging items in rows or columns.</p>

        <h2>CSS Custom Properties</h2>
        <p>CSS variables (custom properties) allow you to store specific values to be reused throughout your stylesheet.</p>

        <h2>Example</h2>
        <pre><code>:root {
  --primary-color: #3490dc;
  --secondary-color: #ffed4a;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}</code></pre>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    },
    {
      id: 4,
      title: "Docker for Developers",
      excerpt: "Learn how to containerize your applications with Docker...",
      category: "DevOps",
      tags: ["Docker", "DevOps", "Containers"],
      date: "2024-03-05",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>Docker has revolutionized the way we develop, ship, and run applications. Let's explore how to use Docker effectively.</p>
        
        <h2>What is Docker?</h2>
        <p>Docker is a platform for developing, shipping, and running applications in containers.</p>

        <h2>Key Concepts</h2>
        <ul>
          <li>Containers</li>
          <li>Images</li>
          <li>Dockerfile</li>
          <li>Docker Compose</li>
        </ul>

        <h2>Basic Docker Commands</h2>
        <pre><code># Build an image
docker build -t myapp .

# Run a container
docker run -p 3000:3000 myapp

# List containers
docker ps</code></pre>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    },
    {
      id: 5,
      title: "Career Growth in Tech",
      excerpt: "Strategies for advancing your career in the technology industry...",
      category: "Career",
      tags: ["Career", "Technology", "Professional Development"],
      date: "2024-03-01",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>Building a successful career in technology requires continuous learning and strategic planning.</p>
        
        <h2>Key Areas for Growth</h2>
        <ul>
          <li>Technical Skills</li>
          <li>Soft Skills</li>
          <li>Networking</li>
          <li>Personal Branding</li>
        </ul>

        <h2>Continuous Learning</h2>
        <p>Stay updated with the latest technologies and trends in your field.</p>

        <h2>Building Your Network</h2>
        <p>Connect with other professionals through meetups, conferences, and online communities.</p>

        <h2>Career Planning</h2>
        <p>Set clear goals and create a roadmap for your career progression.</p>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    },
    {
      id: 6,
      title: "The Future of AI in Development",
      excerpt: "Exploring how artificial intelligence is shaping software development...",
      category: "Technology",
      tags: ["AI", "Machine Learning", "Technology"],
      date: "2024-02-28",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>Artificial Intelligence is transforming the way we develop software and solve problems.</p>
        
        <h2>AI in Development</h2>
        <p>AI tools are becoming increasingly sophisticated, helping developers write better code faster.</p>

        <h2>Key Applications</h2>
        <ul>
          <li>Code Generation</li>
          <li>Bug Detection</li>
          <li>Code Review</li>
          <li>Performance Optimization</li>
        </ul>

        <h2>Future Trends</h2>
        <p>Explore upcoming trends in AI-assisted development and how they might impact your work.</p>

        <h2>Getting Started</h2>
        <p>Learn how to incorporate AI tools into your development workflow.</p>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    },
    {
      id: 7,
      title: "Clean Code Principles",
      excerpt: "Best practices for writing maintainable and efficient code...",
      category: "Programming",
      tags: ["Programming", "Best Practices", "Code Quality"],
      date: "2024-02-25",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555066931-bf19f8fd8865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      content: `
        <p>Writing clean, maintainable code is essential for long-term project success.</p>
        
        <h2>Key Principles</h2>
        <ul>
          <li>Meaningful Names</li>
          <li>Single Responsibility</li>
          <li>DRY (Don't Repeat Yourself)</li>
          <li>KISS (Keep It Simple, Stupid)</li>
        </ul>

        <h2>Code Organization</h2>
        <p>Learn how to structure your code for better maintainability.</p>

        <h2>Best Practices</h2>
        <p>Explore common patterns and anti-patterns in software development.</p>

        <h2>Example</h2>
        <pre><code>// Bad
function d(a,b) { return a+b; }

// Good
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}</code></pre>
      `,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    }
  ]);

  const addBlogPost = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      readTime: `${Math.ceil(newPost.content.split(' ').length / 200)} min read`,
      author: {
        name: "Himanshu Singh",
        avatar: "https://i.pravatar.cc/150?img=3",
        bio: "Full-stack developer passionate about creating amazing web experiences."
      }
    };
    setBlogPosts(prevPosts => [post, ...prevPosts]);
  };

  const getBlogPost = (id) => {
    return blogPosts.find(post => post.id === parseInt(id));
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== parseInt(id)));
  };

  return (
    <BlogContext.Provider value={{ blogPosts, addBlogPost, getBlogPost, deleteBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext; 