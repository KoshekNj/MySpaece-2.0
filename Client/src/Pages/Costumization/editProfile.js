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
import gif1 from "../../Gifs/ohsogothic.gif";
import gif2 from "../../Gifs/aboutme.gif";
import gif3 from "../../Gifs/catstatic.gif";
import gif4 from "../../Gifs/cheetos.gif";
import gif5 from "../../Gifs/evil.gif";
import gif6 from "../../Gifs/haveabeautifulday.gif";
import gif7 from "../../Gifs/heathate.gif";
import gif8 from "../../Gifs/ihateeveryone.gif";
import gif9 from "../../Gifs/Iloveboys.gif";
import gif10 from "../../Gifs/kissme.gif";
import gif11 from "../../Gifs/latenights.gif";
import gif12 from "../../Gifs/onlinennow.gif";
import gif13 from "../../Gifs/onlinenow.gif";
import gif14 from "../../Gifs/scary.gif";
import gif15 from "../../Gifs/tarotsocials.gif";
import gif16 from "../../Gifs/xoxo.gif";

const EditProfile = () => {
    let pageName = "Profile costumization"
    const { user } = useContext(userContext);
    const { username } = useParams();
    const [profile, setProfile] = useState([]);
    const [selectedGif, setGif] = useState(gif1);
    const gifSelection = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15, gif16];
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
                    gif: selectedGif,

                }
            )
            .then((response) => {
                console.log(response.data);
                console.log(response.data.gif)
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
                                    age: profile.age,
                                    country: profile.country,
                                    gender: profile.gender,
                                    description: profile.description,
                                    band: profile.band,
                                    singer: profile.singer,
                                    song: profile.song,
                                    gif: profile.selectedGif,
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
                    <>
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
                                        age: profile.age,
                                        country: profile.country,
                                        gender: profile.gender,
                                        description: profile.description,
                                        band: profile.band,
                                        singer: profile.singer,
                                        song: profile.song,
                                        gif: profile.selectedGif,
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
                                            <img src={selectedGif} alt="gif"></img>
                                        </div>
                                        <button type="Submit">
                                            Save quiz
                                        </button>
                                    </Form>

                                </Formik>
                            </div>

                        </div>
                        <h2>Click on the gif you want to use</h2>
                        <div className="edit__gif">

                            {gifSelection.map((gif, i) => (
                                <div className="edit__gif--container" onClick={() => setGif(gif)}>
                                    <img src={gif}></img>
                                </div>
                            ))}

                        </div>
                    </>
                }

            </div>

        </>
    )
}

export default EditProfile;
