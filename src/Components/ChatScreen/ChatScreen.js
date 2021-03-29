
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import img from "../../images/catAvatar.png"
import './ChatScreen.css';


const ChatScreen = () => {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "https://image.freepik.com/free-vector/cute-orange-robot-cat-avatar_79416-86.jpg",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image: "https://image.freepik.com/free-vector/cute-orange-robot-cat-avatar_79416-86.jpg",
      message: "Hows it going!",
    },
    {
      message: "Hi! How are you?",
    },

  ])

  const handleSend = (event) => {
    event.preventDefault();
    if (input) {
      setMessages([...messages, { message: input }]);
    }
    setInput("");
  };

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/08/20</p>
      {
        messages.map(item => {
          const { message, image, name } = item;
          return (
            name
              ? (
                <div className="chatScreen__message">
                  <Avatar src={image} alt={name} className="chatScreen__image" />
                  <p className="chatScreen__text">{message}</p>
                </div>
              )
              : (
                <div className="chatScreen__message">
                  <p className="chatScreen__textUser">{message}</p>
                </div>
              )
          )
        })
      }

      <form action="" className="chatScreen__input" >
        <input type="text" placeholder="Type a message..." className="chatScreen__inputField" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={handleSend} className="chatScreen_inputButton">
          send
        </button>
      </form>

    </div>

  );
};

export default (ChatScreen);