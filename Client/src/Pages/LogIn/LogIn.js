import React from 'react';
import { useState, useEffect } from 'react';
import './LogInStyle.scss';
import {
   Link,
   useNavigate
} from "react-router-dom";



const LogIn = () => {

   const [values, setValues] = useState({ username: "", password: "" });
   const [inputs, setInputs] = useState([
      {
         id: 1,
         name: "username",
         type: "text",
         placeholder: "username",
         label: "Username",
         required: true,
      },
      {
         id: 2,
         name: "password",
         type: "password",
         placeholder: "Password",
         label: "Password",
         required: true,
      },
   ]);

   const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
   };
   const navigate = useNavigate();

   const submitForm = (e) => {
      e.preventDefault();
   };

   useEffect(() => { console.log(values.username, values.password) });

   return (
      <div className='log-in'>
         <div className="log-in__container">
            <h2>Welcome to</h2>
            <h1>MySpæc</h1>
            <form onSubmit={submitForm}>
               <input onChange={onChange} type="text" placeholder="Enter your username" name="uname" required></input>
               <input onChange={onChange} type="password" placeholder="Enter your password" name="passw" required></input>
               <button>Log In</button>
            </form>
            <div className='log-in__redirect'>
               <h3>Don't have an account?</h3>
               <Link to="/signUp"> Signup</Link>
            </div>
         </div>
      </div>
   );
}

export default LogIn;