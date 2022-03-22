import * as React from "react";
import { useState } from "react";
import "./profile.scss";

const ProfileBox = () => {
  return (
    <>
      <div className="profile">
        <div className="profile__top">
          <img src="missgowon.jpg" alt="Profilna"></img>
          <div className="profile__info">
            <p>Username</p>
            <p>Age</p>
            <p>Country</p>
            <p>Gender</p>
          </div>
        </div>
        <div className="profile__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;
