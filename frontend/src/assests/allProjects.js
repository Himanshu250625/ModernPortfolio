// src/assets/allProjects.js
import img1 from "../assests/img4.png";
import img2 from "../assests/img5.png";
import img6 from "../assests/img6.png";
import img7 from "../assests/img7.png";
import img8 from "../assests/img8.png";
import img9 from "../assests/img9.png";
import img3 from "../assests/img1.png";
import img4 from "../assests/img2.png";
import img5 from "../assests/img3.png";

// New project images from Unsplash
const taskDashboardImg = "https://images.unsplash.com/photo-1540350394-557-8d14678e7f91?w=800&auto=format&fit=crop&q=60";
const ecommerceImg = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60";
const chatApiImg = "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=60";
const paymentApiImg = "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&auto=format&fit=crop&q=60";
const socialMediaImg = "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60";
const projectManagementImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60";
const elearningImg = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60";
const aiInterviewImg = "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60";
const imageRecognitionImg = "https://images.unsplash.com/photo-1555952494-efd681c7e3f9?w=800&auto=format&fit=crop&q=60";
const sentimentAnalysisImg = "https://images.unsplash.com/photo-1553484771-83a7b3d3f3b3?w=800&auto=format&fit=crop&q=60";
const recommendationImg = "https://images.unsplash.com/photo-1553484771-83a7b3d3f3b3?w=800&auto=format&fit=crop&q=60";

const allProjects = [
  // Frontend Projects
  {
    id: 1,
    name: "Analog Clock",
    description: "A modern, animated analog clock with a Rolex-inspired design featuring and a stylish gradient background for an elegant and responsive look.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: img9,
    github: "https://github.com/Himanshu250625/ClockBasic",
    live: "https://analog-clock-himanshu-singh.netlify.app/",
    category: "frontend",
    status: "completed",
    features: [
      "Smooth animations",
      "Responsive design",
      "Custom styling",
      "Real-time updates"
    ],
    date: "2024-03-15"
  },
  {
    id: 2,
    name: "Note App",
    description: "A simple note app using html, css and js A minimal and elegant Note App. Easily add or remove notes with a simple click and fully responsive layout.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: img2,
    github: "https://github.com/Himanshu250625/note-app",
    live: "https://modernnoteappbyhim.netlify.app/",
    category: "frontend",
    status: "completed",
    features: [
      "Add/Delete notes",
      "Local storage",
      "Responsive design",
      "Clean UI"
    ],
    date: "2024-03-10"
  },
  {
    id: 3,
    name: "🔍 Image Explorer",
    description: "A image search app using html, css and js with responsive UI and Searching functionalty and download image feature.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: img7,
    github: "https://github.com/Himanshu250625/ImageSearchApp",
    live: "https://image-seach-appbyhim.netlify.app/",
    category: "frontend",
    status: "completed",
    features: [
      "Image search",
      "Download functionality",
      "Responsive design",
      "API integration"
    ],
    date: "2024-03-05"
  },
  {
    id: 4,
    name: "Password Generator",
    description: "Generate secure passwords with options and copy paste button.",
    tech: ["React", "Tailwind"],
    image: img1,
    github: "https://github.com/Himanshu250625/PasswordGeneratorApp",
    live: "https://cozy-bonbon-9705fd.netlify.app/",
    category: "frontend",
    status: "completed",
    features: [
      "Customizable options",
      "Copy to clipboard",
      "Password strength indicator",
      "Modern UI"
    ],
    date: "2024-02-28"
  },
  {
    id: 5,
    name: "Weather App🌦️",
    description: "A beautiful weather app using ReactJs and TailWind CSS which showing seating area temperature.",
    tech: ["React", "Tailwind"],
    image: img6,
    github: "https://github.com/Himanshu250625/WeatherApp",
    live: "https://weather-app-byhim.netlify.app/",
    category: "frontend",
    status: "completed",
    features: [
      "Real-time weather",
      "Location-based",
      "Weather forecasts",
      "Responsive design"
    ],
    date: "2024-02-20"
  },
  {
    id: 6,
    name: "DSA Tracker App",
    description: "A DSA problem tracker app using ReactJs, MaterialUI and Tailwind CSS.",
    tech: ["React", "MaterialUI", "Tailwind"],
    image: img8,
    github: "https://github.com/Himanshu250625/LeetCode_Problem_tracker_App",
    live: "https://leet-code-problem-tracker-app.vercel.app/",
    category: "frontend",
    status: "completed",
    features: [
      "Problem tracking",
      "Progress monitoring",
      "Custom categories",
      "Statistics dashboard"
    ],
    date: "2024-02-15"
  },
  {
    id: 11,
    name: "Task Management Dashboard",
    description: "A modern task management dashboard with drag-and-drop functionality and real-time updates.",
    tech: ["React", "TypeScript", "Tailwind", "DnD Kit"],
    image: taskDashboardImg,
    github: "#",
    live: "#",
    category: "frontend",
    status: "completed",
    features: [
      "Drag and drop tasks",
      "Real-time updates",
      "Task categories",
      "Progress tracking"
    ],
    date: "2024-01-20"
  },
  {
    id: 12,
    name: "E-Commerce Frontend",
    description: "A modern e-commerce frontend with product filtering, cart management, and responsive design.",
    tech: ["React", "Redux", "Tailwind", "Stripe"],
    image: ecommerceImg,
    github: "#",
    live: "#",
    category: "frontend",
    status: "completed",
    features: [
      "Product filtering",
      "Shopping cart",
      "Payment integration",
      "Responsive design"
    ],
    date: "2024-01-15"
  },

  // Backend Projects
  {
    id: 8,
    name: "Course API",
    description: "RESTful API for course management with authentication and authorization.",
    tech: ["Node.js", "MongoDB", "Express"],
    image: img6,
    github: "#",
    live: "#",
    category: "backend",
    status: "completed",
    features: [
      "RESTful endpoints",
      "Authentication",
      "File upload",
      "Data validation"
    ],
    date: "2024-02-05"
  },
  {
    id: 9,
    name: "Auth System",
    description: "Secure user authentication backend with JWT and role-based access control.",
    tech: ["JWT", "Express", "MongoDB"],
    image: img7,
    github: "#",
    live: "#",
    category: "backend",
    status: "completed",
    features: [
      "JWT authentication",
      "Role-based access",
      "Password hashing",
      "Email verification"
    ],
    date: "2024-01-30"
  },
  {
    id: 13,
    name: "Real-time Chat API",
    description: "WebSocket-based real-time chat API with message persistence and user presence.",
    tech: ["Node.js", "Socket.io", "MongoDB", "Redis"],
    image: chatApiImg,
    github: "#",
    live: "#",
    category: "backend",
    status: "completed",
    features: [
      "Real-time messaging",
      "Message persistence",
      "User presence",
      "Room management"
    ],
    date: "2024-01-10"
  },
  {
    id: 14,
    name: "Payment Gateway Integration",
    description: "Secure payment processing API with multiple payment provider support.",
    tech: ["Node.js", "Express", "Stripe", "PayPal"],
    image: paymentApiImg,
    github: "#",
    live: "#",
    category: "backend",
    status: "completed",
    features: [
      "Multiple payment providers",
      "Secure transactions",
      "Webhook handling",
      "Payment tracking"
    ],
    date: "2024-01-05"
  },

  // Fullstack Projects
  {
    id: 7,
    name: "Doctor Appointment System",
    description: "A Full stack doctor appointment system app to book doctor appointments with smart health features.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: img3,
    github: "#",
    live: "https://medicare-frontend123.vercel.app/",
    category: "fullstack",
    status: "completed",
    features: [
      "Appointment booking",
      "Doctor profiles",
      "Patient management",
      "Real-time updates"
    ],
    date: "2024-02-10"
  },
  {
    id: 15,
    name: "Social Media Platform",
    description: "A full-featured social media platform with real-time interactions and content sharing.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: socialMediaImg,
    github: "#",
    live: "#",
    category: "fullstack",
    status: "completed",
    features: [
      "Real-time posts",
      "User interactions",
      "Media sharing",
      "Notifications"
    ],
    date: "2023-12-20"
  },
  {
    id: 16,
    name: "Project Management Tool",
    description: "Collaborative project management platform with task tracking and team management.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    image: projectManagementImg,
    github: "#",
    live: "#",
    category: "fullstack",
    status: "completed",
    features: [
      "Task management",
      "Team collaboration",
      "Progress tracking",
      "File sharing"
    ],
    date: "2023-12-15"
  },
  {
    id: 17,
    name: "E-Learning Platform",
    description: "Interactive e-learning platform with course management and student progress tracking.",
    tech: ["React", "Node.js", "MongoDB", "AWS S3"],
    image: elearningImg,
    github: "#",
    live: "#",
    category: "fullstack",
    status: "completed",
    features: [
      "Course management",
      "Video streaming",
      "Progress tracking",
      "Interactive quizzes"
    ],
    date: "2023-12-10"
  },

  // Machine Learning Projects
  {
    id: 10,
    name: "AI Job Interview",
    description: "Real-time job interviews using AI with natural language processing.",
    tech: ["OpenAI", "WebRTC", "MERN"],
    image: aiInterviewImg,
    github: "#",
    live: "#",
    category: "machinelearning",
    status: "in-progress",
    features: [
      "AI-powered interviews",
      "Real-time feedback",
      "Question generation",
      "Performance analysis"
    ],
    date: "2024-01-25"
  },
  {
    id: 18,
    name: "Image Recognition System",
    description: "Advanced image recognition system using deep learning for object detection and classification.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    image: imageRecognitionImg,
    github: "#",
    live: "#",
    category: "machinelearning",
    status: "completed",
    features: [
      "Object detection",
      "Image classification",
      "Real-time processing",
      "API integration"
    ],
    date: "2023-12-05"
  },
  {
    id: 19,
    name: "Sentiment Analysis Tool",
    description: "Real-time sentiment analysis tool for social media and customer feedback.",
    tech: ["Python", "NLTK", "Scikit-learn", "FastAPI"],
    image: sentimentAnalysisImg,
    github: "#",
    live: "#",
    category: "machinelearning",
    status: "completed",
    features: [
      "Text analysis",
      "Emotion detection",
      "Real-time processing",
      "API endpoints"
    ],
    date: "2023-11-30"
  },
  {
    id: 20,
    name: "Recommendation Engine",
    description: "Personalized recommendation engine for e-commerce and content platforms.",
    tech: ["Python", "Pandas", "Scikit-learn", "Django"],
    image: recommendationImg,
    github: "#",
    live: "#",
    category: "machinelearning",
    status: "completed",
    features: [
      "Personalized recommendations",
      "User behavior analysis",
      "Content filtering",
      "Performance metrics"
    ],
    date: "2023-11-25"
  }
];

export default allProjects;
