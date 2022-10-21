type MovieItemProp = {
  name: string;
  image: string;
  rate: string;
  finished: string;
  id: string;
};
type FeaturedCastItemProps = {
  name: string;
  img: string;
};
export const MovieItem = ({
  finished,
  name,
  image,
  rate,
  id,
}: MovieItemProp) => {
  return (
    <div className="movie-item" id={id}>
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
      <div className="finished">{finished}</div>
      <div className="title">{name}</div>
      <div className="rate">
        <img src={require("../assets/imdb-logo.png")} alt="imdb-logo" />{" "}
        <span> {rate} / 10</span>
      </div>
    </div>
  );
};
export const FeaturedCastItem = ({ name, img }: FeaturedCastItemProps) => {
  return (
    <div className="Cast-item">
      <div className="image" style={{ backgroundImage: `url(${img})` }} />
      <div className="name">{name}</div>
    </div>
  );
};
