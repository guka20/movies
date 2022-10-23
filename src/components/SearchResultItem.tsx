import React from "react";
type SearchResultItemProps = {
  image: string;
  title: string;
  description: string;
  rate: string;
};
export const SearchResultItem = ({
  image,
  title,
  description,
  rate,
}: SearchResultItemProps) => {
  return (
    <div className="search_result_item">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="text-container">
        <div className="movie_title">{title}</div>
        <div className="discription">
          {description ? description : "no description"}
        </div>
        <div className="rate">
          <img src={require("../assets/imdb-logo.png")} alt="imdb_logo" />
          <b>{rate}/10</b>
        </div>
      </div>
    </div>
  );
};
