import React from 'react';

const codingProfiles = [
  {
    name: 'GeeksforGeeks',
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
    link: 'https://www.geeksforgeeks.org/user/himanshu97fb3b/',
  },
  {
    name: 'LeetCode',
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    link: 'https://leetcode.com/u/HimanshuSingh_2732/',
  },
  {
    name: 'HackerRank',
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png',
    link: 'https://www.hackerrank.com/profile/him979322',
  },
  {
    name: 'CodeChef',
    img: 'https://s3.amazonaws.com/codechef_shared/sites/all/themes/abessive/logo.svg',
    link: 'https://www.codechef.com/users/him979322',
  },
];

const CodingProfile = () => {
  return (
    <div className=" py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-primary mb-16 font-serif">
        Coding Profile
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {codingProfiles.map((profile, idx) => (
          <div
            key={idx}
            className="card w-72 mx-auto bg-[#0a0a44] shadow-lg text-white border border-primary hover:shadow-primary transition duration-300 rounded-xl"
          >
            <figure className="px-6 pt-6">
              <img
                src={profile.img}
                alt={profile.name}
                className="rounded-xl h-24 object-contain"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-semibold">{profile.name}</h2>
              <div className="card-actions mt-4">
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  VISIT
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CodingProfile;
