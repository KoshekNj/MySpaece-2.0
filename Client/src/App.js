import LogIn from "./Pages/LogIn/LogIn";
import Homepage from "./Pages/Homepage/homepage";
import SignUp from "./Pages/Sign up/SignUp";
import Feed from "./Pages/Feed/feed";
import Search from "./Pages/Search/search";

import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
