import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Header from "../../Components/Header/Header";
import "./feed.scss";
import Post from "../../Components/Post/post";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../userContext";
import { getPosts } from "../../services/post/getFriendsPosts";


const Feed = () => {
  let pageName = "Worldwide feed";
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

  const [posts, setPosts] = useState([]);
  //const [friends, setFriends] = useState([]);

  useEffect(async () => {

    if (user === null)
      navigate(`/`);


    const res = await getPosts(user);
    console.log(res);

    setPosts(res);
  }, [])




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
