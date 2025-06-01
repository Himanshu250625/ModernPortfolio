import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assests/img1.png';
import img2 from '../assests/img2.png';
import img3 from '../assests/img3.png';
const projectData = [
  {
    title:'Medicare',
    desc: 'A MERN stack doctor appointment system app to book doctor appointments with smart health features.',
    img: img1,
    demo: 'https://medicare-frontend123.vercel.app/',
  },
  {
    title: 'Chatty ',
    desc: 'A real-time chat app with group messaging,user authentication and user can update their profile.',
    img: img2,
    demo: 'https://chattyfullstackrealtimechatapp.onrender.com/',
  },
  {
    title: 'Task Manager',
    desc: 'A task management app with add,prioritize,adding date with task,image and delete task features.',
    img: img3,
    demo: 'https://storied-zabaione-e96333.netlify.app/',
  },
  {
    title: 'RentCart Platform',
    desc: ' Developed a full-stack rental platform with JWT authentication, secure login/signup, and route protection.',
    img: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp',
    demo: 'https://roomrenter.onrender.com/',
  },
];

const ProjectsHome = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="py-16 px-6 bg-base-200">
      <h2
        className="text-4xl text-center font-bold mb-12 text-primary font-serif"
        data-aos="fade-up"
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
        {projectData.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative w-80 rounded-2xl overflow-hidden shadow-lg group transition-all duration-500 hover:shadow-2xl hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-t-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 bg-primary text-white text-xs px-3 py-1 rounded-full shadow-md">
                Project
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500"></div>
            </div>
            <div className="bg-base-100 p-5 rounded-b-2xl">
              <h3 className="text-xl font-semibold text-primary font-serif group-hover:underline transition duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.desc}</p>
              <div className="flex justify-end mt-4">
               <a href={project.demo}> 
                 <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 w-32 hover:scale-105 transition-all text-white">
                   View
                 </button>
               </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/projects">
          <button className="btn btn-primary px-10">See All Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsHome;
