import * as React from "react";
import "./friend.scss";
import image from "../../Images/pc-pf-icon.png"
const Friend = ({ friend }) => {
  const [messages, setMessage] = React.useState({
    message2: "",
  });



  const messageFriend = () => {
    alert("No, we will be friends 4ever. Just us 2 <3");
  };

  return (
    <>
      <div className="friend-box">
        <img src={image} alt="profile-pic"></img>
        <div className="friend-box__info">
          <p>{friend.username}</p>
          <p> {friend.age} years old</p>
          <p> {friend.country} </p>
          <p> {friend.pronouns} </p>
        </div>
        <button onClick={messageFriend}>X</button>
      </div>
      <p>{messages.message2}</p>
    </>
  );
};

export default Friend;
