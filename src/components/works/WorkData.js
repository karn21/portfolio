import taskmanager from "./img/task-manager.png";
import weather from "./img/weather.png";
import colaboard from "./img/colaboard.png";
import respo from "./img/respo.png";
import portfolio from "./img/portfolio.png";
import card from "./img/card.png";
import recepies from "./img/recepies.png";

export const projects = [
  {
    id: 1,
    title: "Lockdown Recepies",
    description:
      "A recepie scrapper web based application built using spoonacular API. Now make whatever you want with just a simple search.",
    tags: ["react", "html", "css", "bootstrap"],
    github_link: "https://github.com/karn21/recepies-project",
    cover_img: recepies,
    project_link: "https://lockdown-recepies.netlify.app/",
  },
  {
    id: 2,
    title: "Collaboration Board",
    description:
      "A Colaboration tool that organizes your projects into boards. Winner of Flipr Hackathon 4.0 under Full Stack Development Category.",
    tags: ["django", "html", "css", "javascript", "bootstrap"],
    github_link: "https://github.com/karn21/colaboard",
    cover_img: colaboard,
    project_link: "http://karn21.pythonanywhere.com/",
  },
  {
    id: 3,
    title: "Weather Widget",
    description:
      "A weather widget which fetches current weather using accuweather API. A simple project which asks for location and gives weather updates.",
    tags: ["react", "html", "css", "bootstrap"],
    github_link: "https://github.com/karn21/Weather-widget",
    cover_img: weather,
    project_link: "https://mausam-today.netlify.com/",
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "A simple task manager built using React in frontend and Django in backend. Created a simple CRUD API and used redux for state management. Django Token Authentication has been used for user authentication.",
    tags: ["react","django", "html", "css", "bootstrap"],
    github_link: "https://github.com/karn21/task-manager",
    cover_img: taskmanager,
    project_link: "https://tsk-manager-karn.herokuapp.com/",
  },
  
  {
    id: 5,
    title: "Personal Portfolio",
    description:
      "My personal portfolio. Hosted on github pages. Fully responsive and optimised for all devices.",
    tags: ["html", "css", "react"],
    github_link: "https://github.com/karn21/portfolio",
    cover_img: portfolio,
    project_link: "https://karn21.github.io/portfolio/",
  },
  {
    id: 6,
    title: "Github Profile Card",
    description:
      "A web app which generates your github profile card using github API. A simple project to get information for any github user.",
    tags: ["html", "css", "javascript"],
    github_link: "https://github.com/karn21/github-card",
    cover_img: card,
    project_link: "https://github-profile-card.netlify.com/",
  },
  {
    id: 7,
    title: "Responsive Web Page",
    description:
      "A single page responsive website optimised for both mobile and laptop devices.",
    tags: ["html", "css", "javascript"],
    github_link: "https://github.com/karn21/responsive-web",
    cover_img: respo,
    project_link: "https://respo-web.netlify.com/",
  },
  
];
