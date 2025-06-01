import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import GradientButton from "./GradientButton";

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
    animation: float 2.5s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 3s ease-in-out infinite;
  }
  .animate-float-delayed {
    animation: float-delayed 2.8s ease-in-out infinite;
  }
`;

const Hero = () => {
  return (
    <>
      <style>{styles}</style>
      <div className="hero min-h-screen bg-gradient-to-br from-base-100 to-base-200 px-4 sm:px-6 md:px-8">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 max-w-7xl mx-auto">
          {/* Developer Icon Section */}
          <div className="relative flex flex-col items-center lg:items-start" data-aos="fade-left">
            <div className="w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(124,58,237,0.6)]">
              <div className="relative w-full h-full">
                {/* Main Developer Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaLaptopCode className="w-24 h-24 text-primary animate-pulse" />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute top-0 left-0 animate-float-slow">
                  <SiJavascript className="w-10 h-10 text-yellow-400" />
                </div>
                <div className="absolute top-0 right-0 animate-float">
                  <SiReact className="w-10 h-10 text-blue-400" />
                </div>
                <div className="absolute bottom-0 left-0 animate-float-delayed">
                  <SiNodedotjs className="w-10 h-10 text-green-400" />
                </div>
                <div className="absolute bottom-0 right-0 animate-float-slow">
                  <SiMongodb className="w-10 h-10 text-green-600" />
                </div>
              </div>
            </div>

            {/* Social Icons with border effect */}
            <div className="flex justify-center gap-6 mt-8">
              <a
                href="https://github.com/Himanshu250625"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl transition-all duration-300 transform hover:scale-125"
              >
                <div className="border-2 border-sky-100 dark:border-white rounded-full p-3 hover:border-primary hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] bg-sky-100">
                  <FaGithub className="dark:text-white" style={{ fill: '#1f2937' }} />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/himanshu-singh-05a474285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-blue-600 dark:text-blue-400 transition-all duration-300 transform hover:scale-125"
              >
                <div className="border-2 border-blue-500 dark:border-blue-300 rounded-full p-3 hover:border-white hover:drop-shadow-[0_0_20px_rgba(0,119,181,0.8)]">
                  <FaLinkedin />
                </div>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-blue-400 dark:text-sky-300 transition-all duration-300 transform hover:scale-125"
              >
                <div className="border-2 border-blue-400 dark:border-sky-300 rounded-full p-3 hover:border-white hover:drop-shadow-[0_0_20px_rgba(29,161,242,0.8)]">
                  <FaTwitter />
                </div>
              </a>
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left" data-aos="fade-right">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-2">
                  Hi, I'm Himanshu Singh
                </span>
              </h1>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"></div>
            </div>
            <h2 className="text-xl sm:text-2xl text-gray-600 mt-6 mb-6 font-medium">
              Full Stack Developer
            </h2>
            <p className="py-4 text-base sm:text-lg leading-relaxed text-gray-800 dark:text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 tracking-wide">
              A passionate Full Stack Developer skilled in building modern web
              applications using React.js, Node.js, and MongoDB. I love creating
              beautiful, responsive interfaces and bringing ideas to life with
              clean, efficient code.
              <br />
              Currently exploring AI integrations, real-time systems, and scalable
              architectures.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start my-6" data-aos="zoom-in">
              {[
                "React.js",
                "Node.js",
                "MongoDB",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm font-medium transition-colors bg-gradient-to-r from-blue-400 to-purple-500 text-white hover:from-purple-500 hover:to-pink-500"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 items-center justify-center lg:justify-start"
              data-aos="zoom-in"
            >
              <GradientButton
                href="https://drive.google.com/file/d/10Wf-Ww9Tx4R7lrgI4rXT_SZrrC_Mpudk/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full sm:w-48"
              >
                Download Resume
              </GradientButton>
              <GradientButton
                href="mailto:him979322@gmail.com"
                variant="secondary"
                className="w-full sm:w-48"
              >
                Contact Me
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
