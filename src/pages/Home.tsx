import { useEffect, useState } from "react";

import { SwiperTemp } from "../modules/Swiper";
import { MovieItem } from "../components/MovieItem";
import { SwiperSlide } from "swiper/react";
import { fetchData } from "../api/Fetch";
import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
export type MoviesDataTypes = [
  {
    id: string;
    title: string;
    vote_average: string;
    poster_path: string;
    release_date: string;
    media_type: string;
  }
];

export const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movieData, setMovieData] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  const [comingSoonData, setComingSoonData] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  const [inTheaters, setInTheaters] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);

  useEffect(() => {
    setIsLoading(true);
    fetchData("/discover/movie?sort_by=popularity.desc?").then((res) => {
      setMovieData(
        res.results.filter((elem: any) => {
          return elem.poster_path !== null;
        })
      );
    });
    fetchData("/movie/upcoming?").then((res) => {
      setComingSoonData(
        res.results.filter((elem: any) => {
          return elem.poster_path !== null;
        })
      );
    });
    fetchData(
      `/discover/movie?primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-10-22&`
    ).then((res) => {
      setInTheaters(
        res.results.filter((elem: any) => {
          return elem.poster_path !== null;
        })
      );
      setIsLoading(false);
    });

  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="home">
            <header className="swiper-title">
              <h2>Featured Movie</h2>
            </header>
            <SwiperTemp id={1}>
              {movieData.map((l, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={`movie/${l.id}`}>
                      <MovieItem
                        id={l.id}
                        finished={l?.release_date}
                        name={l?.title}
                        rate={l?.vote_average}
                        image={l?.poster_path}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </SwiperTemp>

            <header className="swiper-title">
              <h2>Comming Soon</h2>
            </header>
            <SwiperTemp id={2}>
              {comingSoonData.map((l, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={`movie/${l.id}`}>
                      <MovieItem
                        id={l.id}
                        finished={l?.release_date}
                        name={l?.title}
                        rate={l?.vote_average}
                        image={l?.poster_path}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </SwiperTemp>

            <header className="swiper-title">
              <h2>In Theaters</h2>
            </header>
            <SwiperTemp id={4}>
              {inTheaters.map((l, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={`movie/${l.id}`}>
                      <MovieItem
                        id={l.id}
                        finished={l?.release_date}
                        name={l?.title}
                        rate={l?.vote_average}
                        image={l?.poster_path}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </SwiperTemp>
          </div>
          
        </>
      )}
    </>
  );
};
