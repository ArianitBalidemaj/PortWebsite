import {
  mobile,
  backend,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  threejs,
  bu,
  jm,
  py,
  java,
  creator,
  web,
  lock,
  syllabus,
  movie,
} from "../assets";

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
    title: "JavaScript Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Algorithmic Thinker",
    icon: web,
  },
  {
    title: "Problem Solver",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: py,
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
    name: "Java",
    icon: java,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "NACEX",
    icon: jm,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Spearheaded automation initiatives at NAVEX using JavaScript and WebdriverIO, resulting in notable improvements in process efficiency and reliability.",
      "Demonstrated proficiency in SQL, Angular, and C# through active participation in diverse projects, including page conversion, automation testing, and full-stack app development.",
      "Collaborated closely with experienced mentors to enhance skills and contribute to innovative solutions, gaining comprehensive insights into the software development lifecycle.",
      "Successfully broadened understanding of software engineering principles and practical applications through hands-on experience during the Remote Software Engineering Internship at NAVEX.",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "Boston University",
    icon: bu,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Provided technical support for professors and students in a fast-paced and dynamic environment.",
      "Assisted in resolving technology issues and ensured seamless integration of technology in academic activities.",
      "Collaborated with cross-functional teams to provide best-in-class technology solutions for faculty and students.",
      "Contributed to creating a technologically advanced and efficient learning environment for the university community.",
    ],
  },
];

const projects = [
  {
    name: "Door-Lock",
    description:
      "A physical doorlock that uses software help from C++ and C to create a doorlock that can be opened with face ID. It has a mechanism built using an arudino.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: lock,
    source_code_link: "https://github.com/ArianitBalidemaj/DoorLock",
  },
  {
    name: "311 Boston Tracker",
    description:
      "A thorough analysis of the 311 Service Hotline in Boston and the trends to be analyzed. The analysis was done using Python and its libraries.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Python Libraries",
        color: "green-text-gradient",
      },
    ],
    image: syllabus,
    source_code_link: "https://github.com/ArianitBalidemaj/Boston311TrackerProject",
  },
];

export { services, technologies, experiences, projects };