import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons"
import './App.css';



function App() {
  return (
    <div className="App">
      App.js
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">  <h1>I am a Home Page</h1>  </Route>
          <Route path="/qwert">
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
