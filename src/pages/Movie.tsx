import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { SwiperTemp } from "../modules/Swiper";
import { fetchData } from "../api/Fetch";
import { SwiperSlide } from "swiper/react";
import { SimilarMovieItem } from "../components/SimilarMovieItem";
type MovieDataTypes = {
  id: number;
  name: string;
  title: string;
  genres: [{ id: number; name: string }];
  overview: string;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  vote_average: number;
  created_by: [{ name: string }];
  popularity: number;
};
type SimilarMovieData = [
  {
    id: number;
    poster_path: string;
    title: string;
    name: string;
    vote_average: number;
  }
];
const movieLocation = "https://image.tmdb.org/t/p/original/";
export const Movie = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieData, setMovieData] = useState<MovieDataTypes>(
    {} as MovieDataTypes
  );
  const [similarMovieData, setSimilarMovieData] = useState<SimilarMovieData>([
    {},
  ] as SimilarMovieData);
  const { id, type } = useParams();
  useEffect(() => {
    setIsLoading(true);
    fetchData(`/${type}/${id}`).then((res) => {
      setMovieData(res);
    });
  }, [id, type]);
  useEffect(() => {
    if (movieData.id !== undefined) {
      fetchData(`/${type}/${movieData?.id}/similar?`).then((res) => {
        setSimilarMovieData(
          res.results.filter((elem: any) => {
            return elem.poster_path !== null;
          })
        );
        setIsLoading(false);
      });
    }
  }, [movieData.id, type]);
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="movie_page">
          <header>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
              alt="movie_image"
            />
            <ul className="datas">
              <li>
                <h1>{movieData.name || movieData.title}</h1>
              </li>
              <li className="creators">
                <span>Creators: </span>
                {movieData.created_by?.map((l) => l.name).join(", ") ||
                  "Unknown"}
              </li>
              <li className="genres">
                <b>Genres: </b>
                {movieData.genres?.map((l) => l.name).join(`, `)}
              </li>
              <li className="release">
                <b>Release date: </b>
                {movieData.first_air_date || movieData.release_date}
              </li>
              <li>
                <b>Overview:</b>
                <div className="description">
                  {movieData.overview || "No description"}
                </div>
              </li>
              <li className="rate">
                <img
                  src={require("../assets/imdb-logo.png")}
                  alt="imb"
                  className="imdb-logo"
                />
                <span>
                  <b>{movieData.vote_average}</b>
                </span>
              </li>
            </ul>
          </header>
          <main>
            <header className="swiper-title">
              <h2>Featured Movie</h2>
            </header>
            <SwiperTemp id={5}>
              {similarMovieData.map((l, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={`/movie/${l?.id}`}>
                      <SimilarMovieItem
                        name={l?.title}
                        rate={l?.vote_average}
                        image={`${movieLocation}/${l?.poster_path}`}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </SwiperTemp>
          </main>
        </section>
      )}
    </>
  );
};
