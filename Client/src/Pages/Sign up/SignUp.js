import * as React from "react";
import { useContext } from "react";
import "./signUp.scss";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userContext } from "../../userContext";
import { signUpUser } from "../../services/user/signupUser";

const SignUp = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

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
          onSubmit={async (values) => {
            if (values.password !== values.password2)
              alert("Passwords do not match");
            else {
              const response = await signUpUser(values);
              if (response.status === 201) {
                setUser({
                  username: response.data.username,
                  id: response.data._id,
                });
                navigate(`/`);
              }
            }
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
          <Link to="/login"> LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
