import React from "react";
import { Routers } from "./Routers/Routers";
import { Header } from "./components/Header";
import "./styles/index.scss";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
      <footer>
        <div className="socials">
          <span>
            <AiFillFacebook />
          </span>
          <span>
            <AiOutlineInstagram />
          </span>
          <span>
            <AiOutlineTwitter />
          </span>
          <span>
            <AiFillYoutube />
          </span>
        </div>
        <div className="terms">
          <span>Condition of Use</span>
          <span>Privacy & Policy</span>
          <span>Press Room</span>
        </div>
        <div className="copy-right">
          <AiOutlineCopyrightCircle /> 2022 Movie by Gurami Davitadze
        </div>
      </footer>
    </div>
  );
}

export default App;
