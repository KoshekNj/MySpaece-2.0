import React from "react";
import { useState, useEffect } from "react";
import "./LogInStyle.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { Formik, Field, Form, ErrorMessage } from "formik";

const LogIn = () => {
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/users/login`,
        {
          password: values.password,
          username: values.username,
        },
        { withCredentials: true }
      );

      console.log(response.data);
      navigate("/home");
    } catch (error) {
      console.log(error.response.data.message);
      alert("Wrong username or password");
    }
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
