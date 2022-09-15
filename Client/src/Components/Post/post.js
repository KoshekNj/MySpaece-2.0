import * as React from "react";
import "./post.scss";
import { useNavigate } from "react-router-dom";

const Post = ({ post, button }) => {
  const navigate = useNavigate();
  //const { user, setUser } = React.useContext(userContext);
  //console.log(post.comment);
  return (
    <div className="post">
      <div
        className="post--clickable"
        onClick={() => {
          navigate(`/post/${post?._id}`);
        }}
      >
        <div className="post__blog-info">
          <h3>{post?.title}</h3>
          <p>{post?.date}</p>
        </div>
        <div className="post__blog-content">
          <p>{post?.text}</p>
        </div>
      </div>
      <div className="post__likes">
        <div className="post__likes--left">
          <div className="likeButton">
            <p className="likeButton__icon">★</p>
            <p
              className="likeButton__value"
              // onClick={() => {
              //   navigate(`/post/${post._id}`);
              // }}
            >
              0
            </p>
          </div>
          <div className="likeButton">
            <p className="likeButton__icon">✎</p>
            <p
              className="likeButton__value"
              // onClick={() => {
              //   navigate(`/post/${post._id}`);
              // }}
            >
              {post?.comment}
            </p>
          </div>
        </div>
        {button}
      </div>
    </div>
  );
};

export default Post;
