import React from "react";
import { FaLaptopCode, FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

// Add animation styles
const styles = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float-delayed {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float-delayed 3.5s ease-in-out infinite;
  }
  .tech-icon span {
    /* Existing styles for tech-icon span */
  }

  .card-glow:hover {
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.6); /* Adjust color and intensity as needed */
  }
`;

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero min-h-screen bg-base-200 px-4 py-10 md:px-10 lg:px-20">
        <div className="hero-content flex flex-col-reverse lg:flex-row gap-10 md:gap-16 lg:gap-20">
          <div className="w-4/5 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 card-glow" data-aos="fade-right">
            <div className="relative group perspective">
              <div className="relative w-full h-[400px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-secondary/90 rounded-2xl p-6 backface-hidden">
                  <div className="h-full flex flex-col items-center justify-center text-white">
                    <div className="relative w-32 h-32 mb-6">
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                      <FaLaptopCode className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                    <p className="text-center text-white/80">Hover to see my tech stack</p>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-primary/90 rounded-2xl p-6 [transform:rotateY(180deg)] backface-hidden">
                  <div className="h-full flex flex-col items-center justify-center text-white">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="tech-icon">
                        <span className="text-sm font-semibold">React</span>
                        <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
                          <FaCode className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="tech-icon">
                        <span className="text-sm font-semibold">Node.js</span>
                        <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center">
                          <FaCode className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="tech-icon">
                        <span className="text-sm font-semibold">MongoDB</span>
                        <div className="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center">
                          <FaCode className="w-8 h-8" />
                        </div>
                      </div>
                      <div className="tech-icon">
                        <span className="text-sm font-semibold">JavaScript</span>
                        <div className="w-16 h-16 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                          <FaCode className="w-8 h-8" />
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-white/80">MERN Stack Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-serif">
              About Me
            </h1>
            <p className="py-4 text-base md:text-lg text-gray-700 leading-relaxed font-serif">
              Hello! I'm{" "}
              <span className="font-semibold text-secondary">
                Himanshu Singh
              </span>
              , a final-year B.Tech student in Computer Science, passionate
              about crafting efficient, modern, and scalable web applications.
              <br />
              <br />
              I'm skilled in the MERN stack, enjoy solving real-world problems
              through code, and love exploring new technologies like AI
              integration, real-time data handling, and performance
              optimization.
              <br />
              <br />
              When I'm not coding, you can find me at the gym, diving into tech
              articles, or collaborating on projects with my robotics club.
            </p>

            <a href="https://www.linkedin.com/in/himanshu-singh-05a474285">
              
              <button className="btn btn-primary mt-4">
                Let's Connect
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="bg-base-200 py-16 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl font-bold text-primary text-center font-serif mb-10">
          Journey
        </h2>
        <ul className="timeline timeline-vertical lg:timeline-horizontal w-full max-w-6xl mx-auto">
          <li>
            <div className="timeline-start md:text-end mb-10 md:mb-0">
              <div className="timeline-box hover:bg-base-300 transition-colors duration-300 p-4 rounded-lg shadow-md">
                Completion of High School
                <span className="block text-sm text-base-content/80">2016-2017</span>
              </div>
            </div>
            <div className="timeline-middle text-primary">
              <i className="fa-solid fa-graduation-cap text-2xl"></i>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start md:text-end mb-10 md:mb-0">
               <div className="timeline-box hover:bg-base-300 transition-colors duration-300 p-4 rounded-lg shadow-md">
                Completion of Intermediate
                 <span className="block text-sm text-base-content/80">2018-2019</span>
               </div>
            </div>
            <div className="timeline-middle text-primary">
              <i className="fa-solid fa-graduation-cap text-2xl"></i>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-secondary" />
            <div className="timeline-middle text-secondary">
              <i className="fa-solid fa-code text-2xl"></i>
            </div>
            <div className="timeline-end mb-10 md:mb-0">
              <div className="timeline-box hover:bg-base-300 transition-colors duration-300 p-4 rounded-lg shadow-md">
                Btech in CSE at MMMUT
                <span className="block text-sm text-base-content/80">Started in 2021</span>
              </div>
            </div>
            <hr className="bg-secondary"/>
          </li>
          <li>
            <hr className="bg-secondary"/>
            <div className="timeline-start md:text-end mb-10 md:mb-0">
              <div className="timeline-box hover:bg-base-300 transition-colors duration-300 p-4 rounded-lg shadow-md">
                Built Projects with MERN
                <span className="block text-sm text-base-content/80">2023-2024</span>
              </div>
            </div>
            <div className="timeline-middle text-secondary">
              <i className="fa-solid fa-code text-2xl"></i>
            </div>
            <hr className="bg-secondary"/>
          </li>
          <li>
             <hr className="bg-secondary"/>
            <div className="timeline-start md:text-end mb-10 md:mb-0">
              <div className="timeline-box hover:bg-base-300 transition-colors duration-300 p-4 rounded-lg shadow-md">
                Internship at Brainlox
                 <span className="block text-sm text-base-content/80">Full Stack Development</span>
              </div>
            </div>
            <div className="timeline-middle text-secondary">
              <i className="fa-solid fa-code text-2xl"></i>
            </div>
            <hr className="bg-accent"/>
          </li>
          <li>
             <hr className="bg-accent"/>
            <div className="timeline-start md:text-end mb-10 md:mb-0">
              <div className="timeline-box hover:bg-base-300 transition-colors duration-300 p-4 rounded-lg shadow-md">
                Completed Btech Journey
                <span className="block text-sm text-base-content/80">in 2025</span>
              </div>
            </div>
            <div className="timeline-middle text-accent">
              <i className="fa-solid fa-robot text-2xl"></i>
            </div>
          </li>
        </ul>
      </div>

      {/* Quote Card */}
      <div className="px-4 py-16 bg-base-100 md:px-10 lg:px-20">
        <div className="max-w-2xl mx-auto">
          <div className="card shadow-lg bg-primary text-primary-content hover:shadow-xl transition-shadow duration-300">
            <div className="card-body text-center">
              <h2 className="card-title justify-center">Inspiration 💡</h2>
              <p className="italic text-primary-content/90">
               "The function of good software is to make the complex appear simple."
              </p>
               <p className="text-sm font-semibold text-primary-content/70">– Grady Booch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
