import React from "react";
type SimilarMovieItemProp = {
  image: string;
  rate: number;
  name: string;
};
export const SimilarMovieItem = ({
  image,
  rate,
  name,
}: SimilarMovieItemProp) => {
  return (
    <div className="similar_movie_item">
      <div className="item">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <div className="rate">IMDB {rate} / 10</div>
      </div>
      <h3>{name}</h3>
    </div>
  );
};
