import * as React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import reklamaHome from "../../Ads/Banner2.png";
import reklamaFeed from "../../Ads/Banner1.png";
import reklamaSearch from "../../Ads/Banner3.png";

const links = [
  {
    label: "My profile",
    link: "/home",
    icon: "profile2.png",
  },
  {
    label: "Worldwide feed",
    link: "/feed",
    icon: "computer icon.png",
  },
  {
    label: "Contact center",
    link: "/search",
    icon: "friends.png",
  },
  {
    label: "Profile costumization",
    link: "/Profile costumization",
    icon: "editprofile.png",
  },
];

const ads = [reklamaHome, reklamaFeed, reklamaSearch];

const Header = ({ page }) => {
  return (
    <>
      <div className="header">
        <h2>{page}</h2>
        <h2>Welcome friend {":)"}</h2>
      </div>
      <div className="header__top">
        <div className="header__links">
          {links
            .filter((link) => link.label !== page)
            .map((link, i) => (
              <Link to={link.link}>
                <div className="header__link">
                  <img src={link.icon} alt={`${link.label} icon`}></img>
                  <p>{link.label}</p>
                </div>
              </Link>
            ))}
        </div>
        <img
          src={ads[Math.floor(Math.random() * ads.length)]}
          alt="Reklama"
          className="ad1"
        ></img>
      </div>
    </>
  );
};

export default Header;
