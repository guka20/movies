import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviesDataTypes } from "./Home";
import { fetchData } from "../api/Fetch";
import { SearchResultItem } from "../components/SearchResultItem";
// image,
//   title,
//   description,
//   rate,
export const SeeMore = () => {
  const { id } = useParams();
  const [moviesData, setMoviesData] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  useEffect(() => {
    fetchData(`${id}/k_p8ciwzz7`).then((res) => {
      setMoviesData(res.items);
    });
  }, []);
  return (
    <div>
      {moviesData.map((l, index) => (
        <SearchResultItem
          key={index}
          image={l?.image}
          title={l.fullTitle}
          rate={l?.rank}
          description={l?.crew}
        />
      ))}
    </div>
  );
};
