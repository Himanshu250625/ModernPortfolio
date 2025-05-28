import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';
import { GiGraduateCap } from 'react-icons/gi';

const Education = () => {
  const educationData = [
    {
      icon: <FaSchool className="text-6xl text-primary mb-4" />,
      title: 'High School',
      desc: `I have completed my high school from Central Public Academy School. 
             The school was CBSE affiliated and I scored a percentage of 91.5% in my high school board.`,
    },
    {
      icon: <MdSchool className="text-6xl text-primary mb-4" />,
      title: 'Intermediate',
      desc: `I have completed my Intermediate from Little Flower Senior Secondary School GIDA, Gorakhpur.
             The school was CBSE affiliated and I scored a percentage of 80% in my Intermediate board.`,
    },
    {
      icon: <GiGraduateCap className="text-6xl text-primary mb-4" />,
      title: 'Graduation (B.Tech)',
      desc: `I am currently a student in Mohan Madan Malviya University Of Technology completing my graduation in B.Tech in
             Computer Science and Engineering. The university is in Gorakhpur and is government affiliated.`,
    },
  ];

  return (
    <div className=" py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-primary mb-12 font-serif">
        Education
      </h2>

      {/* Steps */}
      <div className="flex justify-center mb-16">
  <ul className="steps w-full max-w-4xl">
    <li className="step step-primary">High School</li>
    <li className="step step-primary">Intermediate</li>
    <li className="step step-primary">Pursuing</li>
    <li className="step">Graduation</li>
  </ul>
</div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] text-white p-8 rounded-2xl shadow-md text-center 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-primary"
          >
            <div className="flex justify-center">
              {edu.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4 mt-2">{edu.title}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
