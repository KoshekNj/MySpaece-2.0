import React, {useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import "./LogInStyle.scss";
import {userContext} from "../../userContext";

const LogIn = () => {
  const navigate = useNavigate();
  const {user,setUser}=useContext(userContext);
  console.log(user);
  const login = async (values) => {
    await axios
      .post(
        `http://localhost:8080/users/login`,
        {
          password: values.password,
          username: values.username,
        },
        { withCredentials: true }
      )
      .then((response) => {
        setUser(response.data.username);
        console.log(response.data);
        navigate(`/home/${response.data.username}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong username or password");
      });
  };

  return (
    <div className="log-in">
      <div className="log-in__container">
        <h2>Welcome to</h2>
        <h1>MySpæc</h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            login(values);
          }}
        >
          <Form>
            <Field
              type="text"
              placeholder="Enter your username"
              name="username"
            />
            <Field
              type="password"
              placeholder="Enter your password"
              name="password"
            />
            <button type="submit ">Log In</button>
          </Form>
        </Formik>
        <div className="log-in__redirect">
          <h3>Don't have an account?</h3>
          <Link to="/signUp"> Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
