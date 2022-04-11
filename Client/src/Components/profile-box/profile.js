import * as React from "react";
import { useContext, useState } from "react";
import "./profile.scss";
import defaultPic from "../../Images/missgowon.jpg";
import { getUser } from "../../services/user/getUser";

const ProfileBox = ({ username }) => {

  const [profile, setProfile] = useState([]);
  const [selectedPic, setPic] = useState();

  React.useEffect(async () => {
    const resUser = await getUser(username);
    setProfile(resUser.data);
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile__top">
          <img src={profile.profilePic} alt="Profilna"></img>
          <div className="profile__info">
            <p>{username}</p>
            <p>{profile.age}</p>
            <p>{profile.country}</p>
            <p>{profile.gender}</p>
          </div>
        </div>
        <div className="profile__description">
          <p>
            {profile.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
