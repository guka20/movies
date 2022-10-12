import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";

import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <nav className="navbar">
          <div className="icon">
            <img src={require("../assets/tv.png")} alt="icon" />
            <b>Movies</b>
          </div>
          <div className="search">
            <input type="search" placeholder="What do you want to watch?" />
            <AiOutlineSearch />
          </div>
          <div className="hamburger-menu">
            <GiHamburgerMenu />
          </div>
        </nav>
        <main>
          <div className="about-movie">
            <h1>John Wick 3 : Parabellum</h1>
            <div className="discription">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </div>
            <Link to="/">
              <button>
                <AiFillPlayCircle /> Watch Trailer
              </button>
            </Link>
          </div>
        </main>
      </header>
    </div>
  );
};
