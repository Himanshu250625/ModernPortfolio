import React from 'react';
import { FaSchool, FaGraduationCap, FaAward } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

const Education = () => {
  const educationData = [
    {
      icon: <FaSchool className="text-6xl text-primary mb-4" />,
      title: 'High School',
      year: '2016-2017',
      school: 'Central Public Academy School',
      desc: 'Completed high school with CBSE board, achieving an outstanding score of 91.5%.',
      achievement: '91.5% in Board Examination'
    },
    {
      icon: <MdSchool className="text-6xl text-primary mb-4" />,
      title: 'Intermediate',
      year: '2018-2019',
      school: 'Little Flower Senior Secondary School GIDA',
      desc: 'Completed intermediate education with CBSE board, securing 72% in board examinations.',
      achievement: '72% in Board Examination'
    },
    {
      icon: <FaGraduationCap className="text-6xl text-primary mb-4" />,
      title: 'B.Tech in Computer Science',
      year: '2021-2025',
      school: 'Madan Mohan Malaviya University of Technology',
      desc: 'Completed B.Tech in Computer Science and Engineering with a focus on software development and emerging technologies.',
      achievement: 'Specialized in Full Stack Development'
    }
  ];

  return (
    <div className="py-20 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-4 font-serif">
          Education Journey
        </h2>
        <p className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          My academic path has been a journey of continuous learning and growth, 
          culminating in a strong foundation in computer science and technology.
        </p>

        {/* Timeline Steps */}
        <div className="flex justify-center mb-16">
          <ul className="steps steps-vertical lg:steps-horizontal w-full max-w-4xl">
            <li className="step step-primary">High School</li>
            <li className="step step-primary">Intermediate</li>
            <li className="step step-primary">Graduation</li>
            <li className="step step-primary">Completed</li>
          </ul>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="group card bg-base-200 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Card content */}
              <div className="card-body relative z-10">
                <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-500">
                  {edu.icon}
                </div>
                <h3 className="card-title text-xl font-bold text-primary justify-center group-hover:text-secondary transition-colors duration-300">
                  {edu.title}
                </h3>
                <div className="text-center mb-4">
                  <span className="badge badge-primary group-hover:badge-secondary transition-colors duration-300">{edu.year}</span>
                </div>
                <h4 className="font-semibold text-base-content text-center mb-2 group-hover:text-primary transition-colors duration-300">
                  {edu.school}
                </h4>
                <p className="text-base-content/70 text-center mb-4">
                  {edu.desc}
                </p>
                <div className="card-actions justify-center">
                  <div className="badge badge-outline badge-primary gap-2 group-hover:scale-110 transition-all duration-300 whitespace-nowrap group-hover:bg-primary group-hover:text-primary-content">
                    <FaAward className="text-primary group-hover:text-primary-content transition-colors duration-300" />
                    {edu.achievement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary text-primary-content p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:opacity-50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Academic Excellence</h3>
              <p className="text-primary-content/90">
                Successfully completed B.Tech in Computer Science with a focus on 
                modern web technologies and software development.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="stat bg-base-100 text-primary rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="stat-title">High School</div>
                <div className="stat-value">91.5%</div>
              </div>
              <div className="stat bg-base-100 text-primary rounded-lg hover:scale-105 transition-transform duration-300">
                <div className="stat-title">Intermediate</div>
                <div className="stat-value">72%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
