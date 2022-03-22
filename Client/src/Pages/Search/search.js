import * as React from "react";
import { useState } from "react";
import "./search.scss";
import Friend from "../../Components/Friend/friend";
import Header from "../../Components/Header/Header";
import reklamaSearch from "../../Ads/Banner3.png";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  let pageName = "Contact center";
  /*const [messages, setMessage]= React.useState({
        message1:""
    })*/

  const messageGo = () => {
    /*setMessage({message1:'You dont need them'})
        setTimeout(() => setMessage({message1:''}), 3000);*/
    alert("You dont need them");
  };
  return (
    <>
      <Header page={pageName} />
      <div className="search">
        <div className="search__top">
          <div className="search__links">
            <Link to="/home">
              <div className="search__link1">
                <img src="profile2.png" alt="Profile ikona"></img>
                <p>My profile</p>
              </div>
            </Link>
            <Link to="/feed">
              <div className="search__link2">
                <img src="computer icon.png" alt="FRIENDS ikona"></img>
                <p>Worldwide feed</p>
              </div>
            </Link>
            <div className="search__link3">
              <img src="editprofile.png" alt="EDIT ikona"></img>
              <p>Profile costumization</p>
            </div>
          </div>
          <img src={reklamaSearch} alt="Reklama" class="ad3"></img>
        </div>
        <div className="search__bottom">
          <h2>Looking for a friend?</h2>
          <div className="search__searchBar">
            <input
              type="text"
              placeholder="Type in a username"
              name="searchbar"
            ></input>
            <button onClick={messageGo}>Go</button>
          </div>
          <h2>Friend List</h2>
          <div className="search__bottom--friend">
            <Friend />
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
