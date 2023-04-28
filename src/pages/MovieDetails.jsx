import { Suspense } from 'react';
import { useRef, useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchMoviesById } from 'services/api';
import MovieCard from 'components/MovieCard/MovieCard';

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
        <button
          type="button"
          style={{
            width: '100px',
            height: '25px',
            display: 'inline-block',
            marginTop: '15px',
            borderRadius: '5px',
            border: '1px solid rgb(13, 87, 170)',
            cursor: 'pointer',
          }}
        >
          Go back
        </button>
      </Link>
      <MovieCard movie={selectedMovie} />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
