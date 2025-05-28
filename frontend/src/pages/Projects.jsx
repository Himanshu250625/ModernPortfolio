import React, { useEffect, useState } from "react";
import allProjects from "../assests/allProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaExternalLinkAlt, FaSearch, FaThLarge, FaList, FaStar, FaCodeBranch } from "react-icons/fa";

const categories = ["frontend", "backend", "fullstack", "machinelearning"];
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "A-Z", value: "name" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const filteredProjects = allProjects
    .filter((project) => {
      const matchesCategory = project.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          // Assuming projects have a date property for newest/oldest sorting
          return new Date(b.date) - new Date(a.date);
        case "oldest":
          return new Date(a.date) - new Date(b.date);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <div className="py-16 px-6 bg-base-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">My Projects</h1>

      {/* Search and Controls */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              className="input input-bordered w-full pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex gap-4 items-center">
            <select
              className="select select-bordered"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            
            <div className="flex gap-2">
              <button
                className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('grid')}
              >
                <FaThLarge />
              </button>
              <button
                className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-outline'}`}
                onClick={() => setViewMode('list')}
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Filter by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(6);
                }}
                className={`btn btn-sm md:btn-md capitalize transition-all duration-300 ${
                  selectedCategory === category ? "btn-primary" : "btn-outline"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid/List */}
      <div className={`max-w-7xl mx-auto ${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'flex flex-col gap-6'
      }`}>
        {filteredProjects.slice(0, visibleCount).map((project, idx) => (
          <div
            key={idx}
            className={`card bg-base-100 shadow-md border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
              viewMode === 'list' ? 'flex-row' : ''
            }`}
            data-aos="fade-up"
            onClick={() => setSelectedProject(project)}
          >
            <figure className={viewMode === 'list' ? 'w-1/3' : ''}>
              <img
                src={project.image}
                alt={project.name}
                className={`w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500 ${
                  viewMode === 'list' ? 'h-full' : ''
                }`}
              />
            </figure>
            <div className={`card-body ${viewMode === 'list' ? 'w-2/3' : ''}`}>
              <h2 className="card-title text-base">{project.name}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>

              <div className="mt-2 flex flex-wrap gap-1">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="badge badge-outline badge-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="card-actions justify-end mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-xs btn-outline gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-xs btn-primary gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredProjects.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleShowMore}
            className="btn btn-primary btn-sm px-6"
          >
            Show More
          </button>
        </div>
      )}

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="modal modal-open">
          <div className="modal-box max-w-3xl">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <h3 className="font-bold text-2xl mb-4">{selectedProject.name}</h3>
            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="badge badge-primary">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4 justify-end">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline gap-2"
              >
                <FaGithub /> View Code
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gap-2"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
