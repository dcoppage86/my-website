
import Intro from './components/intro/Intro.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx';
import Project from './components/projects/Project.jsx';
import Contact from './components/contact/Contact.jsx';
import Resume from './components/resume/Resume.jsx';






function App() {
  return (
      <div className="App">
        <div>
          <Intro/>
          <Skills/>
          <About/>
          <Project/>
          <Contact/>
          <Resume/>
        </div>
      </div>
  );
}

export default App;

