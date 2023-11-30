import Project1 from "../assets/project-1.png";
import Project2 from "../assets/project-2.png";
import Project3 from "../assets/project-3.png";
import Project4 from "../assets/project-4.jpeg";
import comingSoon from "../assets/coming-soon.jpeg";

import Card from "./Card";

const Projects = () => {
  return (
    <div className="me-12 mt-12 flex justify-end items-end">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl font-frs underline underline-offset-8">Projects:</h1>
        <div>
          <div className="flex">
            <Card link="https://froxayn123.github.io/todoapps/" img={Project1} alt="Project-1" title="To-Do Apps" desc="A Web Application using HTML, CSS, JavaScript which can list your To-Do List" size="w-80 h-80" />
            <Card link="https://froxayn123.github.io/bookshelfapps/" img={Project2} alt="Project-2" title="BookShelf Apps" desc="A Web Application using HTML, CSS, JavaScript which can list your books" size="w-80 h-80" />
          </div>
          <div className="flex">
            <Card link="https://froxayn123.github.io/bookhouse/" img={Project3} alt="Project-3" title="BookHouse Apps" desc="A Web Application using ReactJs which can find books powered by Google Books " size="w-80 h-80" />
            <Card link="https://github.com/Froxayn123/library-api" img={Project4} alt="Project-4" title="Library API" desc="An API using NodeJs & Hapi which can be used for Library Web " size="w-80 h-80" />
          </div>
          <div className="flex">
            <Card img={comingSoon} alt="" title="" desc="" size="w-80 h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
