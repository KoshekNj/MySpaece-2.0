import * as React from "react";
import { useContext, useState } from "react";
import "./profile.scss";
import defaultPicture from "../../Images/missgowon.jpg";
import { getUser } from "../../services/user/getUser";

const ProfileBox = ({ username }) => {
  const [profile, setProfile] = useState([]);
  const [selectedPic, setPic] = useState();

  React.useEffect(async () => {
    if (username) {
      const resUser = await getUser(username);
      setProfile(resUser.data);
    }
  }, [username]);

  return (
    <>
      <div className="profile">
        <div className="profile__top">
          {!profile.profilePic ? (
            <img src={defaultPicture} alt="Profilna"></img>
          ) : (
            <img src={profile.profilePic} alt="Profilna"></img>
          )}

          <div className="profile__info">
            <p>{username}</p>
            {!profile.age ? <p>uknown</p> : <p>{profile.age}</p>}
            {!profile.country ? <p>uknown</p> : <p>{profile.country}</p>}
            {!profile.gender ? <p>uknown</p> : <p>{profile.gender}</p>}
          </div>
        </div>
        <div className="profile__description">
          {!profile.description ? (
            <p>You haven't made a description yet</p>
          ) : (
            <p>{profile.description}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
