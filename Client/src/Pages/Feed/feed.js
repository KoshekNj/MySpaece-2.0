import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header/Header";
import "./feed.scss";
import Post from "../../Components/Post/post";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../userContext";
import axios from "axios";


const Feed = () => {
  let pageName = "Worldwide feed";
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  const [posts, setPosts] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {

    if (user === null)
      navigate(`/`);

    const getFriends = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/users/friends/${user}`);
        setFriends(res.data.map(user => user.username));
      }
      catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [])

  React.useEffect(() => {
    const getPosts = async () => {
      try {

        friends.forEach(async (friend) => {
          const res = await axios.get(`http://localhost:8080/posts/${friend}`);
          setPosts([...posts, ...res.data])
        })

      }
      catch (error) {
        console.log(error);
      }
    }
    if (friends.length > 0) {
      getPosts()
    }
  }, [friends])



  console.log(posts)
  return (
    <div className="feed">
      <Header page={pageName} />
      <div className="feed__bottom">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Feed;
