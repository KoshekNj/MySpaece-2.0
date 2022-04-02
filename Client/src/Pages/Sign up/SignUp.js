import * as React from "react";
import { useContext } from "react";
import "./signUp.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userContext } from "../../userContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const register = async (values) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/users/register`,
        {
          username: values.username,
          password: values.password,
          confirmPassword: values.password2,
          email: values.email,
        },
        { withCredentials: true }
      );
      setUser(response.data.username);
      navigate(`/home/${response.data.username}`);
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <h2>Welcome to</h2>
        <h1>MySpæc</h1>
        <Formik
          initialValues={{
            email: "",
            username: "",
            password: "",
            password2: "",
          }}
          onSubmit={(values) => {
            if (values.password === values.password2) register(values);
            else alert("Passwords do not match");
          }}
        >
          <Form>
            <Field type="text" placeholder="Enter your e-mail" name="email" />
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
            <Field
              type="password"
              placeholder="Enter your password again"
              name="password2"
            />
            <button type="submit">Create my account</button>
          </Form>
        </Formik>
        <div className="sign-up__link">
          <h3>Have an account already?</h3>
          <Link to="/"> LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
