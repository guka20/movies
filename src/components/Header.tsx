import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchResultModal } from "./SearchResultModal";
import { fetchData } from "../api/Fetch";
import { Link } from "react-router-dom";
export type SearchResultTypes = [
  {
    title: string;
    name: string;
    id: number;
    poster_path: string;
    vote_average: number;
    first_air_date: string;
    media_type: string;
  }
];

export const Header = () => {
  const [searchInp, setSearchInp] = useState("");
  const [searchResult, setSearchResult] = useState<SearchResultTypes>(
    {} as SearchResultTypes
  );
  useEffect(() => {
    searchInp &&
      fetchData(`/search/multi?query=${searchInp}&`).then((res) => {
        console.log(res.results);
        setSearchResult(
          res.results.filter((el: any) => {
            return el.poster_path !== null;
          })
        );
      });
  }, [searchInp]);
  return (
    <>
      {searchInp && (
        <SearchResultModal data={searchResult} removeSearch={setSearchInp} />
      )}
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
              placeholder="Search here..."
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
