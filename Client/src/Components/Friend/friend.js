import * as React from "react";
import "./friend.scss";
import image from "../../Images/pc-pf-icon.png"
const Friend = () => {
  const [messages, setMessage] = React.useState({
    message2: "",
  });
  const [value, setValue] = React.useState({
    profilePic: image,
    username: "YourBFF4eva",
    age: "Y̢̬̙̝̌̆͗͌̋ͅo̢͇͈͓̳̫̗̦͇͓͒̈́͂́͛͌́́̋̽̉͜ǹ̹̲̬̝͐͒̇ ̺̰͊̇͂͢͜͞J̧̺̹̋̾̓͋͜ū̘̼̻̐́̂ ͖͓̺̭͆̿̄͘͜͢͞͡Ņ̰̙͎̪̱͎̹̆̏̋̃̑͆͌͡ǐ̛̦͙͉̟̻̭̰͖̱̈́͒̑̂̎͗̽͒͜͞ͅ",
    country: "[Redacted]",
    pronouns: ":)/:(",
  });

  const messageFriend = () => {
    alert("No, we will be friends 4ever. Just us 2 <3");
  };

  return (
    <>
      <div className="friend-box">
        <img src={value.profilePic} alt="profile-pic"></img>
        <div className="friend-box__info">
          <p>{value.username}</p>
          <p> {value.age} years old</p>
          <p> {value.country} </p>
          <p> {value.pronouns} </p>
        </div>
        <button onClick={messageFriend}>X</button>
      </div>
      <p>{messages.message2}</p>
    </>
  );
};

export default Friend;
