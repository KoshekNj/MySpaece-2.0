import * as React from "react";
import { useContext, useState } from "react";
import "./profile.scss";
import profilePic from "../../Images/missgowon.jpg";
import { userContext } from "../../userContext";
import { renderMatches } from "react-router-dom";
import axios from "axios";

const ProfileBox = ({ username }) => {

  const { user } = useContext(userContext);
  const [array, setArray] = useState([]);

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/users/${username}`);
        console.log(res);
        console.log(res.data);
        setArray(res.data);
        console.log(array);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  return (
    <>
      <div className="profile">
        <div className="profile__top">
          <img src={profilePic} alt="Profilna"></img>
          <div className="profile__info">
            <p>{username}</p>
            <p>{array.age}</p>
            <p>{array.country}</p>
            <p>{array.gender}</p>
          </div>
        </div>
        <div className="profile__description">
          <p>
            {array.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
