import * as React from "react";
import "./post.scss";

const Post = ({ post }) => {
  console.log(post);
  return (
    <div className="post">
      <div className="post__blog-info">
        <h3>{post?.title}</h3>
        <p>{post?.date}</p>
      </div>
      <div className="post__blog-text">
        <p>{post?.text}</p>
      </div>
    </div>
  );
};

export default Post;
