
import React from "react";
import './Chat.css';
import Avatar from "@material-ui/core/Avatar";
import { Link, withRouter } from "react-router-dom";

const Chat = ({ name, message, profilePic, timestamp, history, location, match }) => {
  const { url } = match

  console.log("history", history);
  console.log("location", location);
  console.log("match", match);

  return (
    <Link to={`${url}/${name}`}>
      <div className="chat">
        <Avatar className="chat__image" alt={name} src={profilePic} />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
        <p className="chat__timestamp">{timestamp}</p>
      </div>
    </Link>
  );
};

export default withRouter(Chat);