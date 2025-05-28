import React from "react";
import c1 from "../assests/c1.png";
import c2 from "../assests/c2.png";
import a1 from "../assests/a1.png";
import logo from "../assests/logo.jpg";
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt, FaDocker, FaCode, FaProjectDiagram, FaTrophy, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiJavascript } from 'react-icons/si';

const About = () => {
  return (
    <>
      {/* Hero/About Section */}
      <div className="hero min-h-screen bg-base-200 px-4 sm:px-6 py-12">
        <div className="hero-content flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          <img
            src={logo}
            alt="Himanshu Singh"
            className="w-[40%] max-w-xs sm:w-[30%] md:w-[40%] lg:w-[50%] h-auto rounded-xl shadow-2xl ring-4 ring-primary"
            data-aos="fade-right"
          />

          <div data-aos="fade-left" className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 font-serif">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-serif max-w-2xl">
              Hello! I'm{" "}
              <span className="font-semibold text-secondary">Himanshu Singh</span>, a final-year B.Tech student in Computer Science, passionate about crafting efficient, modern, and scalable web applications.
              <br /><br />
              I'm skilled in the MERN stack, enjoy solving real-world problems through code, and love exploring new technologies like AI integration, real-time data handling, and performance optimization.
              <br /><br />
              When I'm not coding, you can find me at the gym, diving into tech articles, or collaborating on projects with my robotics club.
            </p>
            <button className="btn btn-primary mt-6">Let's Connect</button>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-base-100 py-16 px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center font-serif">
          My Skills
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            ["JavaScript", 85, "progress-primary"],
            ["React & Node.js (MERN)", 90, "progress-secondary"],
            ["AI Integration", 75, "progress-accent"],
            ["Problem Solving", 80, "progress-info"],
          ].map(([label, value, color], idx) => (
            <div key={idx}>
              <span className="label-text">{label}</span>
              <progress className={`progress ${color} w-full`} value={value} max="100"></progress>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-base-200 py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-primary text-center font-serif mb-10">
          Journey
        </h2>
        <ul className="timeline timeline-vertical">
          <li>
            <div className="timeline-start timeline-box">Completion of High School (2016-2017)</div>
            <div className="timeline-middle text-primary">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <hr />
          </li>
          <li>
            <div className="timeline-start timeline-box">Completion of Intermediate (2018-2019)</div>
            <div className="timeline-middle text-primary">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle text-secondary">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="timeline-end timeline-box"> Btech in CSE at MMMUT Started in 2021</div>
          </li>
          <li>
            <hr />
            <div className="timeline-start text-secondary">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="timeline-end timeline-box">Built Projects with MERN (2023-2024)</div>
          </li>
          <li>
            <hr />
            <div className="timeline-start text-secondary">
              <i className="fa-solid fa-code"></i>
            </div>
            <div className="timeline-end timeline-box">Done internship at Brainlox in full stack development</div>
          </li>
          <li>
            <hr />
            <div className="timeline-start timeline-box">
              Completed my Btech journey in 2025
            </div>
            <div className="timeline-middle text-accent">
              <i className="fa-solid fa-robot"></i>
            </div>
            <hr />
          </li>
        </ul>
      </div>

      {/* Quote */}
      <div className="px-4 sm:px-6 py-16 bg-base-100">
        <div className="max-w-2xl mx-auto">
          <div className="card shadow-lg bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">Favorite Quote 💡</h2>
              <p className="italic">"Code is like humor. When you have to explain it, it's bad." – Cory House</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 sm:px-6 py-16 bg-base-200">
        <div className="card max-w-md mx-auto bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-primary">Get in Touch</h2>
            <p>Want to collaborate, hire, or just chat?</p>
            <div className="card-actions mt-4 flex flex-col sm:flex-row gap-2">
              <a href="mailto:himanshusingh@gmail.com" className="btn btn-outline btn-primary">Email Me</a>
              <a href="https://www.linkedin.com/in/your-profile" className="btn btn-outline btn-accent">LinkedIn</a>
              <a href="https://www.facebook.com/your-profile" className="btn btn-outline btn-info">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download */}
      <div className="bg-base-100 px-4 sm:px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-primary font-serif mb-6">Resume</h2>
        <p className="mb-4 text-gray-600">Want to know more about my experience and skills?</p>
        <a href="/resume/himanshu_resume.pdf" download className="btn btn-primary btn-wide">
          Download My Resume
        </a>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-base-100 py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center font-serif">
          Tech Stack
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaReact className="text-4xl text-blue-500" />, name: "React" },
            { icon: <FaNodeJs className="text-4xl text-green-600" />, name: "Node.js" },
            { icon: <SiMongodb className="text-4xl text-green-700" />, name: "MongoDB" },
            { icon: <SiJavascript className="text-4xl text-yellow-500" />, name: "JavaScript" },
            { icon: <SiTailwindcss className="text-4xl text-cyan-500" />, name: "Tailwind CSS" },
            { icon: <FaPython className="text-4xl text-blue-600" />, name: "Python" },
            { icon: <FaGitAlt className="text-4xl text-orange-600" />, name: "Git" },
            { icon: <FaDocker className="text-4xl text-blue-700" />, name: "Docker" },
          ].map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center p-4 bg-base-200 rounded-lg hover:shadow-lg transition-all">
              {tech.icon}
              <span className="mt-2 font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hobbies & Interests */}
      <div className="bg-base-200 py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center font-serif">
          Hobbies & Interests
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Fitness & Gym", description: "Regular workout enthusiast focusing on strength training and cardio" },
            { title: "Tech Reading", description: "Stay updated with latest tech trends and programming articles" },
            { title: "Robotics", description: "Active member of robotics club, working on innovative projects" },
            { title: "Problem Solving", description: "Regular practice on coding platforms like LeetCode and HackerRank" },
          ].map((hobby, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-primary">{hobby.title}</h3>
                <p>{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-base-100 py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center font-serif">
          Fun Facts
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCode className="text-4xl text-blue-500" />,
              title: "Coding Problems Solved",
              value: "500+",
              description: "Solved complex problems on LeetCode, HackerRank, and CodeChef"
            },
            {
              icon: <FaProjectDiagram className="text-4xl text-green-500" />,
              title: "Full-Stack Projects",
              value: "10+",
              description: "Built and deployed complete MERN stack applications"
            },
            {
              icon: <FaTrophy className="text-4xl text-yellow-500" />,
              title: "Hackathon Experience",
              value: "5+",
              description: "Participated and won prizes in various hackathons"
            },
            {
              icon: <FaGithub className="text-4xl text-purple-500" />,
              title: "Open Source",
              value: "3+",
              description: "Active contributions to open-source projects"
            }
          ].map((fact, idx) => (
            <div key={idx} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="card-body">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-base-100 rounded-full">
                    {fact.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{fact.title}</h3>
                    <div className="text-3xl font-bold mt-2">{fact.value}</div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-base-200 py-16 px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 text-primary text-center font-serif">
          What People Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "John Doe",
              role: "Senior Developer",
              company: "Tech Corp",
              text: "Himanshu is an exceptional developer with great problem-solving skills and attention to detail."
            },
            {
              name: "Jane Smith",
              role: "Project Manager",
              company: "Innovate Inc",
              text: "Working with Himanshu was a pleasure. His technical expertise and communication skills are outstanding."
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <p className="italic">"{testimonial.text}"</p>
                <div className="mt-4">
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Achievements Section */}
      <div className="bg-base-100 px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-primary text-center font-serif mb-10">
          Achievements
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card bg-base-200 shadow-xl">
            <figure className="px-4 pt-4">
              <img src={a1} alt="Achievement" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary">Hackathon Winner</h3>
              <p>First place in the University Tech Fest Hackathon 2023</p>
            </div>
          </div>
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-primary">Academic Excellence</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Dean's List for Academic Excellence (2022-2023)</li>
                <li>Top 5% in Department (2023)</li>
                <li>Best Project Award in Final Year</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="bg-base-100 px-4 sm:px-6 py-16">
        <h2 className="text-3xl font-bold text-primary text-center font-serif mb-10">Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {[
            { src: c1, tip: "Java Programming" },
            { src: c2, tip: "CSS Framework" },
            { src: c1, tip: "Java Programming - HackerRank" },
            { src: c2, tip: "DSA Mastery - LeetCode" },
          ].map((item, idx) => (
            <div className="tooltip" data-tip={item.tip} key={idx}>
              <img src={item.src} alt={item.tip} className="w-28 rounded shadow-lg" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
