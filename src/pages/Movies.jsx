import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3'].map(movie => {
        return (
          <Link key={movie.id} to={'${movie}'}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
