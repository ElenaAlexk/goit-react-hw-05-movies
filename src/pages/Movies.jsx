import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'services/api';
import SearchMovies from 'components/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  //const updateQueryString = evt => {
  //const movieIdValue = evt.target.value;
  //if (movieIdValue === '') {
  //return setSearchParams({});
  //}
  //setSearchParams({ movieId: movieIdValue });
  //};
  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (query === '') return;

    const getMovie = async () => {
      try {
        const { result } = await fetchMoviesByQuery(query);
        setMovies(result);
      } catch (error) {
        error(error.message);
        setMovies([]);
      }
    };
    getMovie();
  }, [searchParams]);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  //const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <main>
      <SearchMovies onSubmit={handleSubmit} />
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Movies;
