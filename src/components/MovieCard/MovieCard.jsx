//import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  //const location = useLocation();
  //const backLinkLocationRef = location.state?.from ?? '/movies';
  const { title, genres, release_date, overview, vote_average, poster_path } =
    movie;
  const userScore = ((vote_average / 10) * 100).toFixed(0);
  const imgUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <>
      <div>
        <img src={imgUrl} alt="film-card" />
        <div>
          <h1>{title}</h1>
          <h3>Release: {release_date}</h3>
          <p>User score: {userScore}%</p>
          <h2>Overwiew</h2>
          <p>{overview}</p>
          <h2>Genre</h2>
          <p>{genres && genres[0].name}</p>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
