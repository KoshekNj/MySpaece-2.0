import React, { useState, useMemo } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import Homepage from "./Pages/Homepage/homepage";
import SignUp from "./Pages/Sign up/SignUp";
import Feed from "./Pages/Feed/feed";
import Search from "./Pages/Search/search";
import Profile from "./Pages/Profile/userProfile";
import Edit from "./Pages/Costumization/editProfile";
import PostSingle from "./Pages/Post/post";
import { userContext } from "./userContext";
import { get, set } from "./utils/storage";

function App() {
  function setUserState(userState) {
    set({
      key: "userState",
      value: userState,
    });
  }

  function getUserState() {
    try {
      const storedUser = get({ key: "userState" });
      return storedUser || null;
    } catch (err) {
      return null;
    }
  }

  const [user, setUser] = useState(getUserState());
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  React.useEffect(() => {
    setUserState(user);
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/feed/:username" element={<Feed />} />
            <Route path="/search/:username" element={<Search />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/edit/:username" element={<Edit />} />
            <Route path="/post/:postId" element={<PostSingle />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
