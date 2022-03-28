import * as React from "react";
import { useContext, useEffect } from "react";
import "./search.scss";
import Friend from "../../Components/Friend/friend";
import Header from "../../Components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../userContext";

const Search = () => {
  let pageName = "Contact center";
  const navigate = useNavigate();
  const {user, setUser}=useContext(userContext);
  const messageGo = () => {
    alert("You dont need them");
  };
  
  useEffect(() => {
    if(user===null)
          navigate(`/`); 
  })
  return (
    <>
      <Header page={pageName} />
      <div className="search">
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
            <Friend/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
