import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "./LogInStyle.scss";
import { userContext } from "../../userContext";
import { logInUser } from "../../services/user/loginUser";

const LogIn = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

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
          onSubmit={async (values) => {
            const response = await logInUser(values);
            if (response.status === 200) {
              setUser({
                username: response.data.username,
                id: response.data._id,
              });
              navigate(`/`);
            }
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
