import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython,
  FaJava, FaVuejs, FaBootstrap, FaCode, FaLayerGroup
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiCplusplus, SiTailwindcss,
  SiNextdotjs, SiPostgresql, SiMysql, SiDaisyui,
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const skillSet = {
    frontend: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
      { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
      { name: 'DaisyUI', icon: <SiDaisyui className="text-pink-400" /> },
      { name: 'Material UI', icon: <FaLayerGroup className="text-blue-500" /> }, // Placeholder icon
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" /> },
      { name: 'Convex.dev', icon: <FaLayerGroup className="text-teal-600" /> },
    ],
    fullstack: [
      { name: 'MERN Stack', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    ],
    language: [
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
      { name: 'C++', icon: <SiCplusplus className="text-blue-600" /> },
      { name: 'C', icon: <FaCode className="text-blue-800" /> },
      { name: 'Java', icon: <FaJava className="text-red-600" /> },
      { name: 'Python', icon: <FaPython className="text-blue-400" /> },
    ],
  };

  return (
    <div className="bg-base-100 py-16 px-6 text-center">
      <h2 className="text-4xl font-bold text-primary mb-8 font-serif" data-aos="fade-up">Skills</h2>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="200">
        <button onClick={() => setActiveCategory('frontend')} className={`btn ${activeCategory === 'frontend' ? 'btn-primary' : 'btn-outline'}`}>Frontend</button>
        <button onClick={() => setActiveCategory('backend')} className={`btn ${activeCategory === 'backend' ? 'btn-primary' : 'btn-outline'}`}>Backend</button>
        <button onClick={() => setActiveCategory('fullstack')} className={`btn ${activeCategory === 'fullstack' ? 'btn-primary' : 'btn-outline'}`}>Fullstack</button>
        <button onClick={() => setActiveCategory('language')} className={`btn ${activeCategory === 'language' ? 'btn-primary' : 'btn-outline'}`}>Languages</button>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {skillSet[activeCategory].map((skill, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            className="flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <span className="text-md font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
