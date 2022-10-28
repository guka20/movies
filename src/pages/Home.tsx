import { useEffect, useState, useContext } from "react";
import { LoadingContext } from "../Context/Loading";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";

import { MdKeyboardArrowRight } from "react-icons/md";
import { SwiperExcVid, SwiperTemp } from "../modules/Swiper";
import { MovieItem } from "../components/MovieItem";
import { SwiperSlide } from "swiper/react";
import { fetchData } from "../api/Fetch";
import { useNavigate } from "react-router-dom";
export type MoviesDataTypes = [
  {
    id: string;
    title: string;
    vote_average: string;
    poster_path: string;
    release_date: string;
  }
];
type VideosData = [
  {
    key: string;
    name: string;
    site: string;
  }
];
export const Home = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const navigate = useNavigate();
  const [videos, setVideos] = useState<VideosData>([{}] as VideosData);
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
    let isCancelled = false;
    if (!isCancelled) {
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
      });
      fetchData(`/movie/297762/videos?`).then((res) => {
        setVideos(res.results);
      });
    }
    return () => {
      isCancelled = true;
      setIsLoading(false);
    };
  }, []);
  return (
    <>
      <div className="home">
        <header className="swiper-title">
          <h2>Featured Movie</h2>
          {/* <button className="see-more" onClick={() => navigate("/featured")}>
            See more <MdKeyboardArrowRight />
          </button> */}
        </header>
        <SwiperTemp id={1}>
          {movieData.map((l, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem
                  id={l.id}
                  finished={l?.release_date}
                  name={l?.title}
                  rate={l?.vote_average}
                  image={l?.poster_path}
                />
              </SwiperSlide>
            );
          })}
        </SwiperTemp>

        <header className="swiper-title">
          <h2>Comming Soon</h2>
          {/* <button
            className="see-more"
            onClick={() =>
              navigate(
                "/discover/movie?primary_release_date.gte=2022-01-01&primary_release_date.lte=2022-10-22&"
              )
            }
          >
            See more <MdKeyboardArrowRight />
          </button> */}
        </header>
        <SwiperTemp id={2}>
          {comingSoonData.map((l, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem
                  id={l.id}
                  finished={l?.release_date}
                  name={l?.title}
                  rate={l?.vote_average}
                  image={l?.poster_path}
                />
              </SwiperSlide>
            );
          })}
        </SwiperTemp>
        {/* <header className="swiper-title">
          <h2>Exclusive</h2>
          <a
            href="https://www.youtube.com/watch?v=gMe1mQvp6D8&list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
            target="_blank"
            rel="noreferrer"
          >
            <button className="see-more">
              See more <MdKeyboardArrowRight />
            </button>
          </a>
        </header> */}

        {/* <SwiperExcVid id={3}>
          {videos.map((l) => (
            <SwiperSlide>
              <iframe
                width="400px"
                height="200px"
                src={`https://www.youtube.com/embed/${l.key}`}
                title={l.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div style={{ fontWeight: "bold" }}>
                {l.site} - {l.name}
              </div>
            </SwiperSlide>
          ))}
        </SwiperExcVid> */}
        <header className="swiper-title">
          <h2>In Theaters</h2>
          {/* <button className="see-more" onClick={() => navigate("/InTheaters")}>
            See more <MdKeyboardArrowRight />
          </button> */}
        </header>
        <SwiperTemp id={4}>
          {inTheaters.map((l, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem
                  id={l.id}
                  finished={l?.release_date}
                  name={l?.title}
                  rate={l?.vote_average}
                  image={l?.poster_path}
                />
              </SwiperSlide>
            );
          })}
        </SwiperTemp>
      </div>
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
    </>
  );
};
