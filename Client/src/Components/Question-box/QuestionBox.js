import * as React from "react";
import { useState } from "react";
import "./QuestionBox.scss";
import gif from "../../Images/ohsogothic.gif";

const QuestionBox = () => {
  return (
    <div className="quiz">
      <p className="quiz__q--first">Favourite bands:</p>
      <p className="quizz__a--first">Lorem ipsum dolor sit amet</p>
      <p className="quiz__q--second">Favourite singer:</p>
      <p className="quiz__a--second">Doja cat</p>
      <p className="quiz__q--third">Favourite song:</p>
      <p className="quiz__a--third">Ut ac tortor libero </p>
      <img src={gif} alt="gif"></img>
    </div>
  );
};

export default QuestionBox;
