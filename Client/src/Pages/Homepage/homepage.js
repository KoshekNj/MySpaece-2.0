import * as React from "react";
import { useState, useContext } from "react";
import "./homepage.scss";
import Header from "../../Components/Header/Header";
import ProfileBox from "../../Components/profile-box/profile";
import QuestionBox from "../../Components/Question-box/QuestionBox";
import Post from "../../Components/Post/post";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import krasAd from "../../Images/krasvjevericakvadrat.png";
import { userContext } from "../../userContext";
import { getPosts } from "../../services/post/getPosts";
import { createPost } from "../../services/post/createPost";

const Homepage = () => {
  let pageName = "My profile";
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const [users, setUsers] = useState([]);

  const [shouldfetch, setShouldFetch] = React.useState(true);
  const { username } = useParams();
  const date = new Date();
  const formatDate = `${date.getDate()}/${date.getMonth() + 1
    }/${date.getFullYear()}`;


  React.useEffect(() => {
    if (user === null)
      navigate(`/`);
  }, []);

  React.useEffect(async () => {
    if (shouldfetch == true) {
      const posts = await getPosts(username)
      setUsers(posts);
      setShouldFetch(false)
    }
  }, [shouldfetch]);

  return (
    <div>
      <Header page={pageName} />
      <div className="home">
        <div className="home__left-side">
          <ProfileBox username={username} />
          <QuestionBox username={username} />
          <div className="home__reklama">
            <img src={krasAd} alt="Kras"></img>
          </div>
          <Link to="/">
            <button onClick={() => {
              setUser(null);
            }
            }>LOG OUT</button>
          </Link>
        </div>

        <div className="home__right-side">
          <Formik
            initialValues={{
              author: username,
              title: "",
              text: "",
              date: formatDate,
            }}
            onSubmit={async (values) => {
              const response = await createPost(values);
              if (response.status === 201) {
                setShouldFetch(true)
              }
            }}
          >
            <div className="home__create-post">
              <Form>
                <Field
                  type="text"
                  placeholder="Enter blogpost title..."
                  name="title"
                  required
                ></Field>
                <Field
                  type="text"
                  placeholder="Create new blogpost..."
                  name="text"
                  required
                ></Field>
                <button type="Submit">
                  Post it
                </button>
              </Form>
            </div>
          </Formik>
          {users?.map((post, i) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
