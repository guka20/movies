import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MoviesDataTypes } from "./Home";
import { fetchData } from "../api/Fetch";
import { SearchResultItem } from "../components/SearchResultItem";

export const SeeMore = () => {
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  useEffect(() => {
    let isCancelled = false;
    if (!isCancelled) {
      fetchData(`${id}`).then((res) => {
        console.log(res);
        setMoviesData(res.results);
      });
    }
    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div>
      <button
        onClick={scrollToTop}
        className="scroll-to-top"
        style={{ display: visible ? "inline" : "none" }}
      >
        <svg height="50" width="50">
          <line
            x1="19"
            y1="13"
            x2="32"
            y2="33"
            style={{
              borderRadius: "15px",
              stroke: "#be123c",
              strokeWidth: "4",
            }}
          />
          <line
            x1="20"
            y1="13"
            x2="4"
            y2="33"
            style={{ stroke: "#be123c", strokeWidth: "4" }}
          />
        </svg>
      </button>
    </div>
  );
};
