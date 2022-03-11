import LogIn from './Pages/LogIn/LogIn'
import Homepage from './Pages/Homepage/homepage';
import SignUp from './Pages/Sign up/SignUp'
import Feed from './Pages/Feed/feed'
import {
  Routes,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
