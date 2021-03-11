import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NotExisting from './components/NotExisting/NotExisting';
import TeamInfo from './components/TeamInfo/TeamInfo';

function App() {

  return (
    <div className="App">

    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/team/:teamId">
          <TeamInfo />
        </Route>

        <Route path="*" >
          <NotExisting />
        </Route>

      </Switch>
    </Router>
    </div>

  );
}

export default App;
