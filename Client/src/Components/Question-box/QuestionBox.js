import * as React from "react";
import { useState } from "react";
import "./QuestionBox.scss";
import gif from "../../Images/ohsogothic.gif";
import axios from "axios";


const QuestionBox = ({ username }) => {

  const [array, setArray] = useState([]);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/users/${username}`);
        console.log(res);
        console.log(res.data);
        setArray(res.data);
        console.log(array);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  return (
    <div className="quiz">
      <p className="quiz__q--first">Favourite bands:</p>
      <p className="quizz__a--first">{array.band}</p>
      <p className="quiz__q--second">Favourite singer:</p>
      <p className="quiz__a--second">{array.singer}</p>
      <p className="quiz__q--third">Favourite song:</p>
      <p className="quiz__a--third">{array.song} </p>
      <img src={gif} alt="gif"></img>
    </div>
  );
};

export default QuestionBox;
