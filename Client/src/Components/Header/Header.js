import * as React from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../userContext";
import { useContext } from "react";
import "./Header.scss";
import reklama1 from "../../Ads/Banner2.png";
import reklama2 from "../../Ads/Banner1.png";
import reklama3 from "../../Ads/Banner3.png";
import reklama4 from "../../Ads/Banner4.png";
import icon1 from "../../Images/computer icon.png";
import icon2 from "../../Images/editprofile.png";
import icon3 from "../../Images/friends.png";
import icon4 from "../../Images/profile2.png"

const ads = [reklama1, reklama2, reklama3, reklama4];

const Header = ({ page }) => {

  const { user, setUser } = useContext(userContext);

  const adSrc = React.useMemo(() => ads[Math.floor(Math.random() * ads.length)], [])

  const links = [
    {
      label: "My profile",
      link: `/home/${user}`,
      icon: icon4,
    },
    {
      label: "Worldwide feed",
      link: `/feed/${user}`,
      icon: icon3,
    },
    {
      label: "Contact center",
      link: `/search/${user}`,
      icon: icon1,
    },
    {
      label: "Profile costumization",
      link: `/edit/${user}`,
      icon: icon2,
    },
  ];
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
          src={adSrc}
          alt="Reklama"
          className="ad1"
        ></img>
      </div>
    </>
  );
};

export default Header;
