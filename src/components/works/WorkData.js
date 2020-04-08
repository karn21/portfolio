import todolist from "./img/to-do-list.png";
import weather from "./img/weather.png";
import colaboard from "./img/colaboard.png";
import respo from "./img/respo.png";
import portfolio from "./img/portfolio.png";
import card from "./img/card.png";

export const projects = [
  {
    id: 1,
    title: "To Do List",
    description:
      "A simple to do list project made as a personal project. All basic functionalities for any to do list.",
    tags: ["react", "html", "css"],
    github_link: "https://github.com/karn21/to-do-list",
    cover_img: todolist,
    project_link: "https://to-do-wonder.netlify.com/",
  },
  {
    id: 2,
    title: "Collaboration Board",
    description:
      "A Colaboration tool that organizes your projects into boards. Winner of Flipr Hackathon 4.0 under Full Stack Development Category.",
    tags: ["django", "html", "css", "javascript"],
    github_link: "https://github.com/karn21/colaboard",
    cover_img: colaboard,
    project_link: "http://karn21.pythonanywhere.com/",
  },
  {
    id: 3,
    title: "Weather Widget",
    description:
      "A weather widget which fetches current weather using accuweather API. A simple project which asks for location and gives weather",
    tags: ["react", "html", "css"],
    github_link: "https://github.com/karn21/Weather-widget",
    cover_img: weather,
    project_link: "https://mausam-today.netlify.com/",
  },
  {
    id: 4,
    title: "Responsive Web Page",
    description:
      "A single page responsive website optimised for both mobile and laptop devices.",
    tags: ["html", "css", "javascript"],
    github_link: "https://github.com/karn21/responsive-web",
    cover_img: respo,
    project_link: "https://respo-web.netlify.com/",
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
    tags: ["html", "css", "react"],
    github_link: "https://github.com/karn21/github-card",
    cover_img: card,
    project_link: "https://github-profile-card.netlify.com/",
  },
];
