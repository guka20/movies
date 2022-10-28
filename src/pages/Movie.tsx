import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api/Fetch";
type MovieDataTypes = {
  name: string;
  title: string;
};
// https://api.themoviedb.org/3/movie/7216?api_key=0b5380ff5db66ea8cdf18e1998943c3b
export const Movie = () => {
  const [movieData, setMovieData] = useState<MovieDataTypes>(
    {} as MovieDataTypes
  );
  const { id } = useParams();
  useEffect(() => {
    fetchData(`/movie/${id}`).then((res) => {
      setMovieData(res);
    });
  }, []);
  return <div>Movie - {movieData.name || movieData.title}</div>;
};
