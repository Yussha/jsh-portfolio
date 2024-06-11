import jshportfolioImg from "../assets/jshportfolio.jpg";
import rentalcarImg from "../assets/RentalCarimg.jpg";
import projectThumbnail1 from "../assets/projectThumbnail1.jpg";
import starBucksImg from "../assets/StarBucksImg.jpg";
import wordPressTemplateImg from "../assets/WordPressTemplateImg.jpg";
import reactjs from "../assets/science.png";
import tailwind from "../assets/Tailwind CSS.png";
import html from "../assets/HTML5.png";
import css from "../assets/css-3.png";
import js from "../assets/js-file.png";
import bootstrap from "../assets/Bootstrap.png";



export const projects = [
  {
    id: 1,
    img: jshportfolioImg,
    projectName: "Official Jsh Portfolio",
    details:
      "My portfolio, built with React.js, features my projects and skills in a sleek design. I practiced Tailwind CSS for rapid styling, ensuring a modern and responsive layout. This portfolio demonstrates my proficiency in React.js and Tailwind CSS.",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: tailwind,
      },
    ],
    urlRepo: "https://github.com/Yussha/rentalCar",
    urlWebsite: "https://yussha.github.io/rentalCar/",

  },
  {
    id: 2,
    img: rentalcarImg,
    projectName: "RentalCar Booking",
    details:
      "This rental car booking app, built with React.js and Bootstrap, showcases fundamental React concepts and front-end development skills. Users can browse, select, and book rental cars through a dynamic, responsive interface. React handles state management and routing, while Bootstrap provides a sleek design",
    useTechnology: [
      {
        tech1: reactjs,
        tech2: bootstrap,
      },
    ],
    urlRepo: "https://github.com/Yussha/rentalCar",
    urlWebsite: "https://yussha.github.io/rentalCar/",

  },

  {
    id: 3,
    img: projectThumbnail1,
    projectName: "Project Portfolio",
    details:
      "This school assignment showcases my work using HTML, CSS, JavaScript, and Bootstrap. It features responsive design and interactive elements, with Bootstrap providing a clean, professional layout. This project highlights my front-end development skills.",
    useTechnology: [
      {
        tech1: html,
        tech2: css,
        tech3: js,
        tech4: bootstrap,
      },
    ],

    urlRepo: "https://jshpersonalportfolio.netlify.app/",
    urlWebsite: "https://jshpersonalportfolio.netlify.app/",

  },

  {
    id: 4,
    img: starBucksImg,
    projectName: "Starbucks Website Front-End Challenge",
    details:
      "This project involves creating a Starbucks website clone to practice my HTML, CSS, and JavaScript skills. The challenge focuses on developing a responsive, visually appealing site with interactive features, simulating a real-world web development scenario. This project highlights my proficiency in front-end technologies and my ability to build user-friendly web applications.",
    useTechnology: [
      {
        tech1: html,
        tech2: css,
        tech3: js,
      },
    ],
    urlRepo: "https://github.com/Yussha/StarBucksChallenge",
    urlWebsite: "https://yussha.github.io/StarBucksChallenge/",
  },

  {
    id: 5,
    img: wordPressTemplateImg,
    projectName: "WordPress Template Conversion Project",
    details:
      "This project involved converting a WordPress template into HTML and CSS code to practice my front-end development skills. The exercise focused on replicating the design and layout of the template, enhancing my understanding of HTML structure and CSS styling. This project demonstrates my ability to translate design templates into responsive web pages.",
    useTechnology: [
      {
        tech1: html,
        tech2: css,
      },
    ],
    urlRepo: "https://github.com/Yussha/PracticeLandingPage",
    urlWebsite: "https://yussha.github.io/PracticeLandingPage/",
  },
];
