import * as React from "react";
import { useState, useContext } from "react";
import "./editProfile.scss";
import Header from "../../Components/Header/Header";
import ProfileBox from "../../Components/profile-box/profile";
import QuestionBox from "../../Components/Question-box/QuestionBox";
import Post from "../../Components/Post/post";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { userContext } from "../../userContext";
import profilePic from "../../Images/missgowon.jpg";
import gif from "../../Images/ohsogothic.gif";

const EditProfile = () => {
    let pageName = "Profile costumization"
    const { user } = useContext(userContext);
    const { username } = useParams();
    const [array, setArray] = useState([]);




    React.useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/posts/${username}`);
                setArray(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        getPosts();

    }, []);

    const updateProfile = async (values) => {
        console.log(values);
        await axios
            .put(
                `http://localhost:8080/users/${username}`,
                {
                    username: username,
                    age: values.age,
                    country: values.country,
                    gender: values.gender,
                    description: values.description,
                    band: values.band,
                    singer: values.singer,
                    song: values.song,

                }
            )
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Error when posting");
            });
    };
    const [selectedTab, setSelectedTab] = React.useState(false);
    const tabs = ["Basic info", 'Favorite stuff']
    return (
        <>
            <Header page={pageName}></Header>
            <div className="edit">
                <h2>What do you want to edit?</h2>
                {selectedTab !== false ?
                    <button onClick={() => setSelectedTab(false)}>Natrag</button>
                    : tabs.map((tab, i) => <button onClick={() => setSelectedTab(i)}>{tab}</button>)
                }{selectedTab === 0 &&

                    <div className="edit__profile">
                        <div className="edit__profile--form">
                            <img src={profilePic} alt="Profilna"></img>


                            <Formik
                                initialValues={{
                                    username: username,
                                    age: array.age,
                                    country: array.country,
                                    gender: array.gender,
                                    description: array.description,
                                    band: array.band,
                                    singer: array.singer,
                                    song: array.song,
                                    pic: gif,
                                }}
                                onSubmit={(value) => {
                                    console.log(value)
                                    updateProfile(value);
                                }}
                            >
                                <Form>
                                    <p>{username}</p>
                                    <Field
                                        type="text"
                                        placeholder="Age"
                                        name="age"

                                    ></Field>
                                    <Field
                                        type="text"
                                        placeholder="Country"
                                        name="country"

                                    ></Field>
                                    <Field
                                        type="text"
                                        placeholder="Gender"
                                        name="gender"

                                    ></Field>
                                    <Field
                                        type="text"
                                        placeholder="Your description"
                                        name="description"

                                    ></Field>
                                    <button type="Submit">
                                        Save profile
                                    </button>
                                </Form>
                            </Formik>

                        </div>
                    </div>
                }

                {selectedTab === 1 &&
                    <div className="edit__quiz">
                        <div className="edit__quiz--questions">
                            <p className="quiz__q--first">Favourite bands:</p>
                            <p className="quiz__q--second">Favourite singer:</p>
                            <p className="quiz__q--third">Favourite song:</p>
                        </div>
                        <div className="edit__quiz--answers">
                            <Formik
                                initialValues={{
                                    username: username,
                                    age: array.age,
                                    country: array.country,
                                    gender: array.gender,
                                    description: array.description,
                                    band: array.band,
                                    singer: array.singer,
                                    song: array.song,
                                    pic: gif,
                                }}
                                onSubmit={(value) => {
                                    console.log(value);
                                    updateProfile(value);
                                }}
                            >
                                <Form>

                                    <Field
                                        className="quiz__a--first"
                                        type="text"
                                        placeholder="Tokyo hotel"
                                        name="band"
                                    ></Field>

                                    <Field
                                        className="quiz__a--second"
                                        type="text"
                                        placeholder="Doja cat"
                                        name="singer"
                                    ></Field>

                                    <Field
                                        className="quiz__a--third"
                                        type="text"
                                        placeholder="Gangam style"
                                        name="song"
                                    ></Field>
                                    <div>
                                        <img src={gif} alt="gif"></img>
                                    </div>
                                    <button type="Submit">
                                        Save quiz
                                    </button>
                                </Form>

                            </Formik>
                        </div>
                    </div>
                }

            </div>
        </>
    )
}

export default EditProfile;
