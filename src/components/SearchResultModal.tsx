import React, { useEffect } from "react";
import { SearchResultItem } from "./SearchResultItem";
import { Link } from "react-router-dom";

interface SearchResultTypes {
  name: string;
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
  media_type: string;
}
type Prop = {
  data: SearchResultTypes[];
  removeSearch: React.Dispatch<React.SetStateAction<string>>;
};
const movieLocation = "https://image.tmdb.org/t/p/original/";
export const SearchResultModal = ({ data, removeSearch }: Prop) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="Search_Result_Modal">
      {data.map === undefined || data.length === 0 ? (
        <span>No Result</span>
      ) : (
        data.map((l, index) => (
          <Link to={`${l.media_type}/${l.id}`} onClick={() => removeSearch("")}>
            <SearchResultItem
              key={index}
              removeSearch={removeSearch}
              media_type={l.media_type}
              title={l.name || l.title}
              image={`${movieLocation}${l?.poster_path}`}
              rate={l.vote_average}
              description={l.first_air_date}
            />
          </Link>
        ))
      )}
    </div>
  );
};
