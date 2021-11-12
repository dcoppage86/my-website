import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Intro from './components/intro/Intro.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx';
import Project from './components/projects/Project.jsx';
import Contact from './components/contact/Contact.jsx';






function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Intro/>
          <Skills/>
          <About/>
          <Project/>
          <Contact/>
        </div>
      </div>
    </Router>
  );
}

export default App;

