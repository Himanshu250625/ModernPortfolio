import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content pt-14 pb-10 px-4 md:px-10 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <nav className="flex justify-center flex-wrap gap-6 text-lg font-semibold">
          <a className="link link-hover hover:text-primary" href="#home">Home</a>
          <a className="link link-hover hover:text-primary" href="#about">About</a>
          <a className="link link-hover hover:text-primary" href="#projects">Projects</a>
          <a className="link link-hover hover:text-primary" href="#contact">Contact</a>
          <a className="link link-hover hover:text-primary" href="#coding">Coding</a>
        </nav>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition duration-300">
            <FaInstagram />
          </a>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/himanshu-singh-05a474285"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://github.com/Himanshu250625"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
          <a href="https://www.facebook.com/your_username" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
            <FaFacebook />
          </a>
        </div>

        <aside className="pt-4 text-sm opacity-70">
          <p>© {new Date().getFullYear()} — All rights reserved by <span className="font-semibold">Himanshu Singh</span></p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
