import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
          <NavigationBar/>
          <h1>Hello world</h1>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/about"/>
            <Route exact path="/portfolio"/>
            <Route exact path="/contact"/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
