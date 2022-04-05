import * as React from "react";
import { useState } from "react";
import "./QuestionBox.scss";
import gif from "../../Images/ohsogothic.gif";
import axios from "axios";
import gif1 from "../../Gifs/ohsogothic.gif";
import gif2 from "../../Gifs/aboutme.gif";
import gif3 from "../../Gifs/catstatic.gif";
import gif4 from "../../Gifs/cheetos.gif";
import gif5 from "../../Gifs/evil.gif";
import gif6 from "../../Gifs/haveabeautifulday.gif";
import gif7 from "../../Gifs/heathate.gif";
import gif8 from "../../Gifs/ihateeveryone.gif";
import gif9 from "../../Gifs/Iloveboys.gif";
import gif10 from "../../Gifs/kissme.gif";
import gif11 from "../../Gifs/latenights.gif";
import gif12 from "../../Gifs/onlinennow.gif";
import gif13 from "../../Gifs/onlinenow.gif";
import gif14 from "../../Gifs/scary.gif";
import gif15 from "../../Gifs/tarotsocials.gif";
import gif16 from "../../Gifs/xoxo.gif";


const QuestionBox = ({ username }) => {

  const [profile, setProfile] = useState([]);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/users/${username}`);
        console.log(res);
        console.log(res.data);
        setProfile(res.data);
        console.log(profile);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
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
