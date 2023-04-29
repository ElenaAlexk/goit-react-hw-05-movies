import { Suspense } from 'react';
import { useRef, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({});

  //запит на фільм//
  useEffect(() => {
    const fetchSelectedMovie = async movieId => {
      try {
        const movieData = await fetchMoviesById(movieId);
        setSelectedMovie(movieData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSelectedMovie(movieId);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkLocationRef.current}>
        <button type="button" className={css.btn}>
          &#8592; Go back
        </button>
      </Link>
      <MovieCard movie={selectedMovie} />
      <h3>Additional information</h3>
      <ul className={css.movieInfo}>
        <li>
          <Link className={css.movieInfoLink} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link className={css.movieInfoLink} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
