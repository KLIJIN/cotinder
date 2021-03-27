import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
      App.js
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">  <h1>I am a Home Page</h1>  </Route>
          <Route path="/qwert">   <TinderCards />     </Route>
          <Route path="/chat">   <h1>I am a chat</h1>      </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
