import LogIn from "./Pages/LogIn/LogIn";
import Homepage from "./Pages/Homepage/homepage";
import SignUp from "./Pages/Sign up/SignUp";
import Feed from "./Pages/Feed/feed";
import Search from "./Pages/Search/search";
import Profile from "./Pages/Profile/userProfile"
import Edit from "./Pages/Costumization/editProfile"
import { userContext } from "./userContext";
import { useState, useMemo } from 'react';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<LogIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/home/:username" element={<Homepage />} />
            <Route path="/feed/:username" element={<Feed />} />
            <Route path="/search/:username" element={<Search />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/edit/:username" element={<Edit />} />
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
