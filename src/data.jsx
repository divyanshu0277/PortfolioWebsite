import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
 {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },
 
  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Divyanshu',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'raj',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Not Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Bihar',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+919472820600',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'dtstriker7@gmail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'Not Available',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '0-1',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '12+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '2+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '4+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 - PRESENT',
    title: 'Software Developer <span> Prodigy infotech </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024(apr-Present)',
    title: 'Content Writer <span> GeeksforGeeks </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2024 jan',
    title: 'Soft Skill <span> kolkata </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021 - Present',
    title: 'Engineering Degree <span> MSIT,Kolkata </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2020',
    title: '12th <span> D.S College Katihar Bihar </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2017-2018',
    title: '10th <span> S.N.G High School vaishali </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '75',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '79',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '77',
  },

  {
    id: 4,
    title: 'Php',
    percentage: '4',
  },

  {
    id: 5,
    title: 'Wordpress',
    percentage: '55',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '1',
  },

  {
    id: 7,
    title: 'Angular',
    percentage: '1',
  },

  {
    id: 8,
    title: 'React',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Personal Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Himself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Personal Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Himself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JAVASCRIPT',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://divyanshu0277.github.io/personal-portfolio-website/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Personal  Website',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Himself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JAVASCRIPT',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://divyanshu0277.github.io/Personal-Portfolio/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Railway Ticket Reservation System',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Project : ',
        desc: '5th semester',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML, CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://divyanshu0277.github.io/IRCTC-Website/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Upcomming Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: '',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: '',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Tic Tac Toc Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Game',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Himself',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Javascript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
