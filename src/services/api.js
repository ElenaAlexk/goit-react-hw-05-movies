import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '0638d4937acfae28483912f2b585d98b'; //персональний ключ

export const fetchTrendMovies = async () => {
  const { data } = await axios.get(
    `${baseURL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await axios.get(
    `${baseURL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
};

export const fetchMoviesById = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${baseURL}/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
