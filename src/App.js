import Skills from "./components/Skills";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div>
      <section id="home">
        <header className="h-screen">
          <Jumbotron />
        </header>
      </section>
      <div>
        <section id="projects">
          <Projects />
        </section>
      </div>
      <div>
        <section id="skills">
          <Skills />
        </section>
      </div>
      <div>
        <section id="contacts">
          <Contacts />
        </section>
      </div>
    </div>
  );
};

export default App;
