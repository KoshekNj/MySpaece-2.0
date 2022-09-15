import * as React from "react";
import { useState } from "react";
import "./QuestionBox.scss";
import { getUser } from "../../services/user/getUser";
import defaultGif from "../../Images/ohsogothic.gif";

const QuestionBox = ({ username }) => {
  const [profile, setProfile] = useState([]);

  React.useEffect(async () => {
    if (username) {
      const resUser = await getUser(username);
      setProfile(resUser.data);
    }
  }, [username]);

  return (
    <div className="quiz">
      <p className="quiz__q--first">Favourite bands:</p>
      {!profile.band ? (
        <p className="quiz__a--first">unknown</p>
      ) : (
        <p className="quiz__a--first">{profile.band} </p>
      )}
      <p className="quiz__q--second">Favourite singer:</p>
      {!profile.singer ? (
        <p className="quiz__a--second">unknown</p>
      ) : (
        <p className="quiz__a--second">{profile.singer} </p>
      )}
      <p className="quiz__q--third">Favourite song:</p>
      {!profile.song ? (
        <p className="quiz__a--third">unknown</p>
      ) : (
        <p className="quiz__a--third">{profile.song} </p>
      )}
      {!profile.gif ? (
        <img src={defaultGif} alt="Gif"></img>
      ) : (
        <img src={profile.gif} alt="Gif"></img>
      )}
    </div>
  );
};

export default QuestionBox;
