import { j } from "maath/dist/misc-19a3ec46.esm";
import{
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
import { c } from "maath/dist/index-0332b2ed.esm";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Data Science",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full stack Developer",
      company_name: "BrainBin",
      icon: jobit,
      iconBg: "#E6DEDD",
      date: "Dec 2024 - Jan 2025",
      points: [
        "Build a full-stack notes app enabling CRUD operations using React, improving productivity for over 100+ users.",
        "Delivered an intuitive, distraction-free UI with responsive design principles.",
        "Implementing responsive design and ensuring cross-browser compatibility."
      ],
    },
    {
      title: "Web Developer",
      company_name: "Mockify",
      icon: carrent,
      iconBg: "#E6DEDD",
      date: "Mar 2025 - Apr 2025",
      points: [
        "Developed an AI-driven mock interview platform using React and Gemini API to simulate real-world interviews through NLP",
        "Dynamically generated domain-specific questions and provided real-time feedback with performance scoring.",
        "Enhanced interview readiness by offering personalized improvement tips after each session.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "VentureVista",
      icon: tripguide,
      iconBg: "#383E56",
      date: "Dec 2024 - Present",
      points: [
        " Engineered a full-stack adventure booking platform using MERN stack with role-based access (admin,traveler, provider).",
        "Implemented dynamic search filters (location, activity, difficulty) to personalize user experience",
        " Integrated secure booking and authentication flows for seamless trip planning.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Mockify",
      description:
        "A web application that allows users to create and manage their own mock interviews, providing a platform for practicing coding and technical skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "shadcn/ui",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/iabhiy28/ai-mock-interview-app",
    },
    {
      name: "BrainBin",
      description:
        "A web application that allows users to create and manage their own mock interviews, providing a platform for practicing coding and technical skills.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/iabhiy28/keeperr-app",
    },
    {
      name: "VentureVista",
      description:
        "Engineered a full-stack adventure booking platform using MERN stack with role-based access admin traveler provider, integrated payment gateway, and implemented JWT authentication.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/iabhiy28/venture-vista",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };