import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Resume from './components/Resume'
import Home from './components/Home'
import Portfolio from './components/Portfolio'



function App() {
  return (
    <Router>
      <div className="App">
          <NavigationBar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/Resume" component={Resume}/>
            <Route exact path="/portfolio" component={Portfolio}/>
          </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
