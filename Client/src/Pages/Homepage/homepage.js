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

const Homepage = () => {
  let pageName = "My profile";
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  console.log(user);
  const [users, setUsers] = useState([]);

  const [shouldfetch, setShouldFetch] = React.useState(true);
  const { username } = useParams();
  console.log(username);
  const date = new Date();
  const formatDate = `${date.getDate()}/${date.getMonth() + 1
    }/${date.getFullYear()}`;


  React.useEffect(() => {
    if (user === null)
      navigate(`/`);
  }, []);

  React.useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/${username}`);
        console.log(res);
        console.log(res.data);
        setUsers(res.data);
        setShouldFetch(false)
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    };
    if (shouldfetch == true) {
      getPosts();
    }
  }, [shouldfetch]);

  const createPost = async (values) => {
    console.log(values);
    await axios
      .post(
        `http://localhost:8080/posts/create`,
        {
          author: values.author,
          title: values.title,
          text: values.text,
          date: values.date,
        }
      )
      .then((response) => {
        setShouldFetch(true)
        console.log(response.data.author);
      })
      .catch((err) => {
        console.log(err);
        alert("Error when posting");
      });
  };


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
            onSubmit={(value) => {
              console.log(value);
              createPost(value);
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
