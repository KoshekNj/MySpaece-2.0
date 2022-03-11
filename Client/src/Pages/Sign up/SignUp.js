import * as React from 'react';
import { useState } from 'react';
import './signUp.scss';
import {
        Link,
        useNavigate
} from "react-router-dom";



const SignUp = () => {

        const navigate = useNavigate();
        const [value, setValue] = useState({
                username: "",
                email: "",
                password: "",
                password2: ""
        })

        const [inputs, setInputs] = useState([
                {
                        id: 1,
                        name: "username",
                        type: "text",
                        placeholder: "Username",
                        errorMessage:
                                "Username must be between 3-12 characters and not include any special characters",
                        label: "Username",
                        pattern: /^[A-Za-z0-9]{3,12}$/,
                        required: true,
                        badInput: false,
                },
                {
                        id: 2,
                        name: "email",
                        type: "email",
                        placeholder: "Email",
                        errorMessage: "Invalid email address",
                        label: "Email",
                        pattern: /\S+@\S+\.\S+/,
                        required: true,
                        badInput: false,
                },
                {
                        id: 3,
                        name: "password",
                        type: "password",
                        placeholder: "Password",
                        errorMessage:
                                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
                        label: "Password",
                        pattern:
                                /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                        required: true,
                        badInput: false,
                },
                {
                        id: 4,
                        name: "confirmPassword",
                        type: "password",
                        placeholder: "Confirm Password",
                        errorMessage: "",
                        label: "Confirm Password",
                        errorMessage: "Passwords don't match!",
                        pattern: value.password,
                        required: true,
                        badInput: false,
                },
        ]);
        const onChange = (e) => {
                setValue({ ...value, [e.target.name]: e.target.value });

        }

        const submitForm = () => {
                if (value.username.length > 0 && value.email.length > 0) {
                        value.password === value.password2 ? navigate("/home") : alert("Nope");

                }
                else
                        alert("Nope");
        }

        return (
                <div className="sign-up">
                        <div className='sign-up__container'>
                                <h2>Welcome to</h2>
                                <h1>MySpæc</h1>
                                <input onChange={onChange} type="text" placeholder="Enter your e-mail" name="email" required></input>
                                <input onChange={onChange} type="text" placeholder="Enter your username" name="username" required></input>
                                <input onChange={onChange} type="password" placeholder="Enter your password" name="password" required></input>
                                <input onChange={onChange} type="password" placeholder="Enter your password again" name="password2" required></input>
                                <button onClick={submitForm} type="button"><span>Create my account</span></button>
                                <div className='log-in__link'>
                                        <h3>Have an account already?</h3>
                                        <Link to="/logIn"> LogIn</Link>
                                </div>
                        </div>
                </div>
        )
}

export default SignUp;