import * as React from "react";
import "./comments.scss";
import profilePic from "../../Images/missgowon.jpg";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../userContext";
const Comment = ({ comment, deleteComment }) => {
  const { user, setUser } = React.useContext(userContext);
  console.log("Comment" + comment._id);
  return (
    <div className="comment">
      {!comment.profilePic ? (
        <img src={profilePic}></img>
      ) : (
        <img src={comment.profilePic}></img>
      )}
      <div className="comment__right">
        <div className="comment__right--up">
          <b>{comment.username}</b>
          <p>{comment.date}</p>
        </div>
        <p>{comment.text}</p>
        {comment.username === user.username ? (
          <button
            onClick={() => {
              deleteComment(comment._id);
            }}
          >
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Comment;
