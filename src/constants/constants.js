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
    title: "Backend Developer",
    company_name: "JM Learning LLC",
    icon: jm,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Provided technical support for professors and students in a fast-paced and dynamic environment.",
      "Assisted in resolving technology issues and ensured seamless integration of technology in academic activities.",
      "Collaborated with cross-functional teams to provide best-in-class technology solutions for faculty and students.",
      "Contributed to creating a technologically advanced and efficient learning environment for the university community.",
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
    name: "Movie Picker App",
    description:
      "An app that helps the user pick their favorite movie based on their mood. It is geared towards couples that have a problem choosing what movie to watch.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
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
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
    ],
    image: lock,
    source_code_link: "https://github.com/",
  },
  {
    name: "Syllabus Reader",
    description:
      "A website that allows students to upload their syllabus and have it create a calendar with all their due dates for assignments. Useful for any college student planning their semester.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: syllabus,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };