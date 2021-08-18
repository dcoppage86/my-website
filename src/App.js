import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
      <NavigationBar/>
      <div className="App">
          <h1>Hello world</h1>
          <Switch>
            <Route exact path="/"/>
            <Route exact path="/about"/>
            <Route exact path="/portfolio"/>
            <Route exact path="/contact"/>
          </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
