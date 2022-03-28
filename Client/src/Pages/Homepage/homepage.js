import * as React from "react";
import {useState, useContext} from "react";
import "./homepage.scss";
import Header from "../../Components/Header/Header";
import ProfileBox from "../../Components/profile-box/profile";
import QuestionBox from "../../Components/Question-box/QuestionBox";
import Post from "../../Components/Post/post";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import krasAd from "../../Images/krasvjevericakvadrat.png";
import { userContext } from "../../userContext";

let index = 1;

const Homepage = () => {
  let pageName = "My profile";
  const navigate = useNavigate();
  const {user, setUser}=useContext(userContext);
  console.log(user);
  const [users, setUsers] = useState([]);
  const { username } = useParams();
  const date = new Date();
  const formatDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  const [value, setValue] = useState({
    title: "",
    date: formatDate,
    text: "",
    id: "",
  });

  React.useEffect(() => {
    if(user===null)
          navigate(`/`); 
    const getUsers = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/users/${username}`);
        console.log(res);
        console.log(res.data);
        setUsers([...res.data]);
        console.log(users.username);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, [username]);

  const [array, setArray] = useState([]);

  return (
    <div>
      <Header page={pageName} />
      <div className="home">
          <div className="home__left-side">
            <ProfileBox />
            <QuestionBox />
            <div className="home__reklama">
              <img src={krasAd} alt="Kras"></img>
            </div>
            <Link to="/">
              <button onClick={()=>{
              setUser(null);}
              }>LOG OUT</button>
            </Link>
          </div>

          <div className="home__right-side">
          <Formik
          initialValues={{
            title: "",
            text: "",
            date: "",
            id:"",
          }}
          onSubmit={(value) => {
            value.date=formatDate;
            index = index + 1;
            value.id = index;
            setValue({ ...value });
            setArray([value, ...array]); //glupo i disgusting HADFHJDFJHDSFJDDSFHHJ
            //zapisat u backend
            //poslat to postu
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
            {array?.map((post, i) => (
              <Post post={post} key={i} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Homepage;
