import { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';
import MovieList from 'components/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setTrendingMovies(results);
      } catch (error) {
        error(error.message);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <MovieList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
