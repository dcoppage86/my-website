import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Contact from './components/Contact'
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
            <Route exact path="/contact" component={Contact}/>
          </Switch>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
