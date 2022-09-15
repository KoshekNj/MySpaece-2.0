import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import icon4 from "../../Images/profile2.png";

const ads = [reklama1, reklama2, reklama3, reklama4];

const Header = ({ page }) => {
  const { user, setUser } = useContext(userContext);
  let [adSrc, setAdSrc] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setAdSrc(ads[Math.floor(Math.random() * ads.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const links = [
    {
      label: "My profile",
      link: `/`,
      icon: icon4,
    },
    {
      label: "Worldwide feed",
      link: `/feed/${user.username}`,
      icon: icon3,
    },
    {
      label: "Contact center",
      link: `/search/${user.username}`,
      icon: icon1,
    },
    {
      label: "Profile costumization",
      link: `/edit/${user.username}`,
      icon: icon2,
    },
  ];
  return (
    <>
      <div className="header">
        <h2>
          {page !== "Post" ? page : <a onClick={() => navigate(-1)}>Go back</a>}
        </h2>
        <h2>
          Welcome {user.username} {":)"}
        </h2>
      </div>
      <div className="header__top">
        <div className="header__links">
          {links
            .filter((link) => link.label !== page)
            .map((link, i) => (
              <Link to={link.link}>
                <img src={link.icon} alt={`${link.label} icon`}></img>
                {link.label}
              </Link>
            ))}
        </div>
        {!adSrc ? (
          <img
            src={ads[Math.floor(Math.random() * ads.length)]}
            alt="Reklama"
            className="ad1"
          ></img>
        ) : (
          <img src={adSrc} alt="Reklama" className="ad1"></img>
        )}
      </div>
    </>
  );
};

export default Header;
