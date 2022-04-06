import * as React from "react";
import { useState, useContext } from "react";
// import "./userProfile.scss";
import Header from "../../Components/Header/Header";
import ProfileBox from "../../Components/profile-box/profile";
import QuestionBox from "../../Components/Question-box/QuestionBox";
import Post from "../../Components/Post/post";
import axios from "axios";
import { useLocation } from "react-router-dom";
import krasAd from "../../Images/krasvjevericakvadrat.png";
import { useParams } from "react-router-dom";


const Profile = () => {
  let pageName = "Pc's profile";
  const [profile, setProfile] = useState([]);
  const location = useLocation();
  const { username } = useParams();

  console.log("user", username)

  console.log(location.pathname);
  React.useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/posts/Bff4eva`);
        console.log(res);
        console.log(res.data);
        setProfile(res.data);
        console.log(profile);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <div>
      <Header page={pageName} />
      <div className="home">
        <div className="home__left-side">
          <ProfileBox username={username} />
          <QuestionBox />
          <div className="home__reklama">
            <img src={krasAd} alt="Kras"></img>
          </div>
        </div>

        <div className="home__right-side">
          {profile?.map((post, i) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile;
