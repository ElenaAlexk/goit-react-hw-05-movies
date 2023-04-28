//import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  //const location = useLocation();
  //const backLinkLocationRef = location.state?.from ?? '/movies';
  const { title, genres, release_date, overview, vote_average, poster_path } =
    movie;
  const releaseDate = new Date(release_date).getFullYear();
  const userScore = ((vote_average / 10) * 100).toFixed(0);
  const imgUrl = `https://image.tmdb.org/t/p/w300/${poster_path}`;

  return (
    <>
      <div>
        <img src={imgUrl} alt="film-card" />
        <div>
          <h1>
            {title} ({releaseDate})
          </h1>
          <p>User score: {userScore}%</p>
          <h3>Overwiew</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres[0].name}</p>
        </div>
      </div>
    </>
  );
};
export default MovieCard;
