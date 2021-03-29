import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Components
import Header from "./Components/Header/Header";
import TinderCards from "./Components/TinderCards/TinderCards";
import SwipeButtons from "./Components/SwipeButtons/SwipeButtons";
import Chats from "./Components/Chats/Chats";
import ChatScreen from "./Components/ChatScreen/ChatScreen"
import './App.css';



function App() {
  return (
    <div className="App">
      App.js
      
      <Router>
        <Switch>
          <Route  path="/chat/:name/">
            <Header backButton="/chat" />
           <ChatScreen />
            
          </Route>
          <Route path="/chat">
            <Header backButton="/" chat="chat"/>
            <Chats />
          </Route>
          <Route exact path="/"> 
            <Header chat="chat" />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
