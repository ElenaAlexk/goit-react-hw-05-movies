import React, { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
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
    if (!query) return;

    const getMovie = async () => {
      try {
        const { results } = await fetchMoviesByQuery(query);
        if (results.length === 0) {
          toast.error('Movie not found. Please try again.');
        } else {
          setMovies(results);
          console.log(results);
        }
      } catch (error) {
        toast.error(error.message);
        setMovies([]);
      }
    };
    getMovie();
  }, [searchParams]);

  //пошук фільма//
  const handleSubmit = query => {
    setSearchParams({ query }); //записуєм в URL//
  };

  //const visibleMovies = movies.filter(movie => movie.includes(movieId));

  return (
    <main>
      <SearchMovies onSubmit={handleSubmit} />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
