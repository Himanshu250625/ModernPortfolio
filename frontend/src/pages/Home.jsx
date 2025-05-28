import React from 'react'
import Hero from '../Components/Hero'
import Skills from '../Components/Skills'
import ProjectsHome from '../Components/ProjectHome'
import Education from '../Components/Education'
import CodingProfile from '../Components/CodingProfile'
import ContactUs from '../Components/ContactUs'
import AboutUs from '../Components/AboutUs'
import Testimonials from '../Components/Testimonials'
import BlogPosts from '../Components/BlogPosts'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Skills/>
      <ProjectsHome/>
      <Education/>
      <CodingProfile/>
      <BlogPosts/>
      <Testimonials/>
      <ContactUs/>
    </div>
  )
}

export default Home
