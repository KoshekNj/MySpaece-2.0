import * as React from "react";
import { useContext, useEffect, useState } from "react";
import "./contactCenter.scss";
import Friend from "../../Components/Friend/friend";
import Header from "../../Components/Header/Header";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../userContext";
import { Formik, Field, Form } from "formik";
import { getFriends } from "../../services/user/getUserFriends";

const ContactCenter = () => {
  let pageName = "Contact center";
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);
  const insult = [
    "hate you",
    "play Elden Ring",
    "have a foot fetish",
    "listen to boomer music",
    "play Genshin Impact",
    "are making fun of your outfits behind your back",
  ];
  const insultGenerator = insult[Math.floor(Math.random() * insult.length)];
  const username = "Bff4eva";
  const messageGo = (userInput) => {
    console.log(userInput);
    console.log({ insultGenerator });
    alert("You dont need " + userInput.username + ", they " + insultGenerator);
  };

  const [friend, setFriend] = useState([]);

  useEffect(async () => {
    if (user === null) navigate(`/`);

    const friends = await getFriends(user.username);
    console.log(friends);
    setFriend(friends.data);
  }, []);
  return (
    <>
      <Header page={pageName} />
      <div className="search">
        <div className="search__bottom">
          <h2>Looking for a friend?</h2>
          <div className="search__searchBar">
            <Formik
              initialValues={{
                username: "",
              }}
              onSubmit={(values) => {
                messageGo(values);
              }}
            >
              <Form>
                <Field
                  type="text"
                  placeholder="Type in a username"
                  name="username"
                ></Field>
                <button type="submit">Go</button>
              </Form>
            </Formik>
          </div>
          <h2>Friend List</h2>
          <div className="search__bottom--friend">
            {friend?.map((friend, i) => (
              <Friend friend={friend} key={friend._id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactCenter;
