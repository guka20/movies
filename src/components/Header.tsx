import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchResultModal } from "./SearchResultModal";
import { fetchData } from "../api/Fetch";
import { Link } from "react-router-dom";
export type SearchResultTypes = [
  {
    description: string;
    id: string;
    image: string;
    title: string;
  }
];
export const Header = () => {
  const [searchInp, setSearchInp] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResultTypes>([
    {},
  ] as SearchResultTypes);
  useEffect(() => {
    fetchData(`Search/k_p8ciwzz7/${searchInp}`).then((res) => {
      setSearchResult(res.results);
    });
  }, [searchInp]);
  return (
    <>
      {searchInp && <SearchResultModal data={searchResult} />}
      <header className="header">
        <nav className="navbar">
          <Link to="/">
            <div className="icon">
              <img src={require("../assets/tv.png")} alt="icon" />
              <b>Movies</b>
            </div>
          </Link>

          <div className="search">
            <input
              type="text"
              placeholder="What do you want to watch?"
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <AiOutlineSearch />
          </div>
          <div className="hamburger-menu">{/* <GiHamburgerMenu /> */}</div>
        </nav>
      </header>
    </>
  );
};
