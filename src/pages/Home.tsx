import {
  useEffect,
  useState,
  useContext,
} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoadingContext } from "../Context/Loading";
import {
  AiOutlineSearch,
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SwiperExcVid, SwiperTemp } from "../modules/Swiper";
import { MovieItem } from "../modules/MovieItem";
import { SwiperSlide } from "swiper/react";
import { fetch } from "../api/Fetch";
import { SearchResultModal } from "../modules/SearchResultModal";

type MoviesDataTypes = [
  {
    id: string;
    rank: string;
    title: string;
    fullTitle: string;
    crew: string;
    imDbRating: string;
    imDbRatingCount: string;
    image: string;
    year: string;
  }
];
export const Home = () => {
  const { setIsLoading } = useContext(LoadingContext);
  const [movieData, setMovieData] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  const [tvsData, setTvsData] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  const [inTheaters, setInTheaters] = useState<MoviesDataTypes>([
    {},
  ] as MoviesDataTypes);
  // const [searchResult, setSearchResult] = useState<MoviesDataTypes>([
  //   {},
  // ] as MoviesDataTypes);
  const [searchInp, setSearchInp] = useState(String);
  useEffect(() => {
    console.log(searchInp || 5);
  }, [searchInp]);
  useEffect(() => {
    setIsLoading(true);
    let isCancelled = false;
    if (!isCancelled) {
      fetch("Top250Movies/k_p8ciwzz7").then((res) => {
        setMovieData(res.items.slice(0, 20));
      });
      fetch("Top250TVs/k_p8ciwzz7").then((res) => {
        setTvsData(res.items.slice(0, 20));
      });
      fetch("InTheaters/k_p8ciwzz7").then((res) => {
        setInTheaters(res.items.slice(0, 20));
      });
    }
    return () => {
      isCancelled = true;
    };
  }, [setIsLoading]);
  return (
    <>
      {searchInp && <SearchResultModal searchText={searchInp} />}
      <header className="header">
        <nav className="navbar">
          <div className="icon">
            <img src={require("../assets/tv.png")} alt="icon" />
            <b>Movies</b>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="What do you want to watch?"
              value={searchInp}
              onChange={(e) => setSearchInp(e.target.value)}
            />
            <AiOutlineSearch />
          </div>
          <div className="hamburger-menu">
            <GiHamburgerMenu />
          </div>
        </nav>
      </header>

      <div className="home">
        <header className="swiper-title">
          <h2>Featured Movie</h2>
          <div className="see-more">
            See more <MdKeyboardArrowRight />
          </div>
        </header>
        <SwiperTemp id={1}>
          {movieData.map((l, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem
                  id={l.id}
                  finished={l?.year}
                  name={l?.title}
                  rate={l?.imDbRating}
                  image={l?.image}
                />
              </SwiperSlide>
            );
          })}
        </SwiperTemp>

        <header className="swiper-title">
          <h2>Featured TV's</h2>
          <div className="see-more">
            See more <MdKeyboardArrowRight />
          </div>
        </header>
        <SwiperTemp id={1}>
          {tvsData.map((l, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem
                  id={l.id}
                  finished={l?.year}
                  name={l?.title}
                  rate={l?.imDbRating}
                  image={l?.image}
                />
              </SwiperSlide>
            );
          })}
        </SwiperTemp>
        <header className="swiper-title">
          <h2>Trailers</h2>
          <a
            href="https://www.youtube.com/watch?v=gMe1mQvp6D8&list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
            target="_blank"
            rel="noreferrer"
          >
            <div className="see-more">
              See more <MdKeyboardArrowRight />
            </div>
          </a>
        </header>
        <SwiperExcVid id={3}>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/SoPSIHSRLRU?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Dungeons & Dragons: Honor Among Thieves (2023) | Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>
              Dungeons & Dragons: Honor Among Thieves (2023)
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/gMe1mQvp6D8?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Hellraiser (2022) | Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>Hellraiser (2022)</div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/3A1YNwGxokA?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="The Woman King (2022) | Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>The Woman King (2022)</div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/KJa3eJnOY6g?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Ticket to Paradise (2022) | Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>Ticket to Paradise (2022)</div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/7fiHn7Ea5eg?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Hocus Pocus 2 (2022) | Official Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>Hocus Pocus 2 (2022)</div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/Sgq1YFCRzcw?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="The Gray Man (2022) | Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>The Gray Man (2022)</div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/N0qslHPFvHI?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Mission: Impossible - Dead Reckoning Part One (2023) | Official Teaser"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>
              Mission: Impossible - Dead Reckoning Part One (2023)
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/sKbn2OatuGs?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Baz Luhrmann's ELVIS (2022) | Official Trailer 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>
              Baz Luhrmann's ELVIS (2022) | Official Trailer 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              width="400px"
              height="200px"
              src="https://www.youtube.com/embed/Nakc_pssfLA?list=PLRDnnvx-4xZ1W6tj38Fun0sZPnTaf1JgW"
              title="Avatar: The Way of Water (2022) | Official Teaser Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div style={{ fontWeight: "bold" }}>
              Avatar: The Way of Water (2022)
            </div>
          </SwiperSlide>
        </SwiperExcVid>
        <header className="swiper-title">
          <h2>In Theaters</h2>
          <div className="see-more">
            See more <MdKeyboardArrowRight />
          </div>
        </header>
        <SwiperTemp id={4}>
          {inTheaters.map((l, index) => {
            return (
              <SwiperSlide key={index}>
                <MovieItem
                  id={l.id}
                  finished={l?.year}
                  name={l?.title}
                  rate={l?.imDbRating}
                  image={l?.image}
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
