type MovieItemProp = {
  name: string;
  image: string;
  rate: string;
  finished: string;
  id: string;
};
const movieLocation = "https://image.tmdb.org/t/p/original/";
export const MovieItem = ({
  finished,
  name,
  image,
  rate,
  id,
}: MovieItemProp) => {
  return (
    <div className="movie-item" id={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${movieLocation}${image})`,
        }}
      />
      <div className="finished">{finished}</div>
      <div className="title">{name}</div>
      <div className="rate">
        <img src={require("../assets/imdb-logo.png")} alt="imdb-logo" />{" "}
        <span> {rate} / 10</span>
      </div>
    </div>
  );
};
