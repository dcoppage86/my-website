import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Intro from './components/intro/Intro.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx';





function App() {
  return (
    <Router>
      <div className="App">
        <div><Intro/></div>
        <div><Skills/></div>
        <div><About/></div>
      </div>
    </Router>
  );
}

export default App;

