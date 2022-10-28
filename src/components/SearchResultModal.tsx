import React, { useEffect } from "react";
import { SearchResultItem } from "./SearchResultItem";

interface SearchResultTypes {
  name: string;
  title: string;
  id: number;
  poster_path: string;
  vote_average: number;
  first_air_date: string;
}
type Prop = {
  data: SearchResultTypes[];
};
const movieLocation = "https://image.tmdb.org/t/p/original/";
export const SearchResultModal = ({ data }: Prop) => {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="Search_Result_Modal">
      {data.map === undefined ? (
        <span>No Result</span>
      ) : (
        data.map((l, index) => (
          <SearchResultItem
            key={index}
            title={l.name || l.title}
            image={`${movieLocation}${l?.poster_path}`}
            rate={l.vote_average}
            description={l.first_air_date}
          />
        ))
      )}
    </div>
  );
};
