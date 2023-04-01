import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home/home";
import Login from "./containers/Login/login";
import Signup from "./containers/Signup/signup";
import UserRoute from "./components/UserRoute";

function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
          <UserRoute path="/" exact element={<Home/>} />
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
