import * as React from "react";
import { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./feed.scss";
import Post from "../../Components/Post/post";
import { Link, useNavigate } from "react-router-dom";

const Feed = () => {
  let pageName = "Worldwide feed";
  const [array, setArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/post")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArray([...array, ...data]);
      });
  }, []);

  console.log(array);
  return (
    <div className="feed">
      <Header page={pageName} />
      <div className="feed__bottom">
        {array?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
