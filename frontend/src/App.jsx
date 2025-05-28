import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import BlogList from './Components/Blog/BlogList'
import BlogPost from './Components/Blog/BlogPost'
import CreatePost from './Components/Blog/CreatePost'
import { BlogProvider } from './context/BlogContext'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Components/Footer'

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <BlogProvider>
      <div data-theme={theme} className="min-h-screen bg-base-100">
        <Router>
          <Navbar onThemeChange={handleThemeChange} currentTheme={theme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<BlogList />} />
            <Route path='/blog/create' element={<CreatePost />} />
            <Route path='/blog/:id' element={<BlogPost />} />
          </Routes>
        </Router>
        <Footer/>
      </div>
    </BlogProvider>
  )
}

export default App
