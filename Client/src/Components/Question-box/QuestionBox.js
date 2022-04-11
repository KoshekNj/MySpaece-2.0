import * as React from "react";
import { useState } from "react";
import "./QuestionBox.scss";
import { getUser } from "../../services/user/getUser";



const QuestionBox = ({ username }) => {

  const [profile, setProfile] = useState([]);

  React.useEffect(async () => {
    const resUser = await getUser(username);
    setProfile(resUser.data);
  }, []);

  return (
    <div className="quiz">
      <p className="quiz__q--first">Favourite bands:</p>
      <p className="quizz__a--first">{profile.band}</p>
      <p className="quiz__q--second">Favourite singer:</p>
      <p className="quiz__a--second">{profile.singer}</p>
      <p className="quiz__q--third">Favourite song:</p>
      <p className="quiz__a--third">{profile.song} </p>
      <img src={profile.gif} alt="gif"></img>
    </div>
  );
};

export default QuestionBox;
