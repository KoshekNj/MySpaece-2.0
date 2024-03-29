import * as React from "react";
import { useState, useContext } from "react";
import "./editProfile.scss";
import Header from "../../Components/Header/Header";
import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { updateProfile } from "../../services/user/updateProfile";
import { getUser } from "../../services/user/getUser";
import profilePicture from "../../Images/missgowon.jpg";
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
  let pageName = "Profile costumization";
  const { username } = useParams();
  const [profile, setProfile] = useState([]);
  const [selectedPicture, setPicture] = useState(profilePicture);
  // const [picToUpload, setPicToUpload] = useState(profilePic);
  const [selectedGif, setGif] = useState(gif1);

  // loadUser -> then setPic && setProfile

  React.useEffect(async () => {
    const user = await getUser(username);
    console.log(user.data.profilePic);
    setProfile(user.data);
    setPicture(user.data.profilePic);
  }, []);

  const gifSelection = [
    gif1,
    gif2,
    gif3,
    gif4,
    gif5,
    gif6,
    gif7,
    gif8,
    gif9,
    gif10,
    gif11,
    gif12,
    gif13,
    gif14,
    gif15,
    gif16,
  ];

  const handleProfileChange = (e) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setPicture(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const [selectedTab, setSelectedTab] = React.useState(false);
  const tabs = ["Basic info", "Favorite stuff"];
  return (
    <>
      <Header page={pageName}></Header>
      <div className="edit">
        <h2>What do you want to edit?</h2>
        {selectedTab !== false ? (
          <button onClick={() => setSelectedTab(false)}>Go back</button>
        ) : (
          tabs.map((tab, i) => (
            <button onClick={() => setSelectedTab(i)}>{tab}</button>
          ))
        )}
        {selectedTab === 0 && (
          <div className="edit__profile">
            <div className="edit__profile-form">
              <Formik
                initialValues={{
                  username: username,
                  profile: profile.profile,
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
                  updateProfile(username, value, selectedGif, selectedPicture);
                }}
              >
                <Form>
                  <label htmlFor="profile">
                    <img src={profile.profilePic} alt="Profile picture"></img>
                  </label>
                  <Field
                    type="file"
                    id="profile"
                    name="profile"
                    onChange={handleProfileChange}
                  ></Field>
                  <p>{username}</p>
                  <Field type="text" placeholder="Age" name="age"></Field>
                  <Field
                    type="text"
                    placeholder="Country"
                    name="country"
                  ></Field>
                  <Field type="text" placeholder="Gender" name="gender"></Field>
                  <Field
                    type="text"
                    placeholder="Your description"
                    name="description"
                  ></Field>
                  <button type="Submit">Save profile</button>
                </Form>
              </Formik>
            </div>
          </div>
        )}

        {selectedTab === 1 && (
          <>
            <div className="edit__quiz">
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
                  updateProfile(username, value, selectedGif, selectedPicture);
                }}
              >
                <Form>
                  <div class="edit__quiz-field">
                    <label className="quiz__q--first">Favourite bands:</label>

                    <Field
                      className="quiz__a--first"
                      type="text"
                      placeholder="Tokyo hotel"
                      name="band"
                    ></Field>
                  </div>
                  <div class="edit__quiz-field">
                    <label className="quiz__q--second">Favourite singer:</label>
                    <Field
                      className="quiz__a--second"
                      type="text"
                      placeholder="Doja cat"
                      name="singer"
                    ></Field>
                  </div>
                  <div class="edit__quiz-field">
                    <label className="quiz__q--third">Favourite song:</label>
                    <Field
                      className="quiz__a--third"
                      type="text"
                      placeholder="Gangam style"
                      name="song"
                    ></Field>
                  </div>
                  <div>
                    <img src={selectedGif} alt="gif"></img>
                  </div>
                  <button type="Submit">Save quiz</button>
                </Form>
              </Formik>
            </div>
            <h2>Click on the gif you want to use</h2>
            <div className="edit__gif">
              {gifSelection.map((gif, i) => (
                <div
                  className="edit__gif--container"
                  onClick={() => setGif(gif)}
                >
                  <img src={gif}></img>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EditProfile;
