import * as React from "react";
import "./friend.scss";
import image from "../../Images/pc-pf-icon.png";
import { useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const [messages, setMessage] = React.useState({
    message2: "",
  });
  const navigate = useNavigate();

  const messageFriend = () => {
    alert("No, we will be friends 4ever. Just us 2 <3");
  };

  return (
    <>
      <div className="friend-box">
        <div
          className="friend-box__clickable"
          onClick={() => {
            navigate(`/profile/${friend.username}`);
          }}
        >
          <img src={friend.profilePic} alt="profile-pic"></img>
          <div className="friend-box__info">
            <p>{friend.username}</p>
            <p> {friend.age} years old</p>
            <p> {friend.country} </p>
            <p> {friend.pronouns} </p>
          </div>
        </div>
        <button onClick={messageFriend}>X</button>
      </div>
      <p>{messages.message2}</p>
    </>
  );
};

export default Friend;
