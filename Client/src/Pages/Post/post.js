import * as React from "react";
import { useState } from "react";
import { getPostById } from "../../services/post/getPostById";
import { useParams } from "react-router-dom";
import Post from "../../Components/Post/post";
import Header from "../../Components/Header/Header";
import "./postSingle.scss";
import profilePic from "../../Images/missgowon.jpg";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { getComments } from "../../services/post/getComments";
import { createComment } from "../../services/post/createComment";
import { userContext } from "../../userContext";
import { deleteComment } from "../../services/post/deleteComment";
import Comment from "../../Components/Comments/comments";
const PostSingle = () => {
  const [post, setPost] = useState();
  const { postId } = useParams();
  const [shouldfetch, setShouldFetch] = React.useState(true);
  const [comments, setComments] = useState();
  const { user, setUser } = React.useContext(userContext);
  let pageName = "Post";

  console.log("post single");
  React.useEffect(async () => {
    const resPost = await getPostById(postId);
    console.log("respost", resPost);
    setPost(resPost);
  }, []);

  React.useEffect(async () => {
    if (shouldfetch == true) {
      const comment = await getComments(postId);
      setComments(comment);
      setShouldFetch(false);
    }
  }, [shouldfetch]);

  const date = new Date();
  const formatDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  console.log("USER" + user.id);
  return (
    <>
      <Header page={pageName} />
      <div className="postSingle">
        <div className="postSingle__container">
          <Post post={post}></Post>
          {user && (
            <Formik
              initialValues={{
                text: "",
                date: formatDate,
                userId: user.id,
                postId: postId,
              }}
              onSubmit={async (values) => {
                const response = await createComment(values);
                if (response.status === 200) {
                  setShouldFetch(true);
                }
              }}
            >
              <div className="postSingle__createComment">
                <Form>
                  <Field
                    as="textarea"
                    placeholder="Write a comment..."
                    name="text"
                    required
                  ></Field>
                  <button type="Submit">Post it</button>
                </Form>
              </div>
            </Formik>
          )}
          {comments?.map((comment) => (
            <Comment
              comment={comment}
              deleteComment={deleteComment}
              key={comment._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostSingle;
