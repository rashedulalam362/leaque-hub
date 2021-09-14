import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeaqueDetails from './components/LeaqueDetails/LeaqueDetails';
import NoMatch from './components/NoMatch/NoMatch';
function App() {
  return (
    <Router>
    <Switch>
     <Route  path="/home">
      <Home />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/team/:idTeam/">
          <LeaqueDetails />
        </Route>
        <Route path="*">
        <NoMatch></NoMatch>
        </Route>
      </Switch>
      </Router>
  );
}

export default App;
