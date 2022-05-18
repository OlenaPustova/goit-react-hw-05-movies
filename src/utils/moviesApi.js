import axios from 'axios';

const API_KEY = '0168078ac140c863b612e0e53d746624';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendsMovies = () => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get('/trending/movie/day').then(({ data }) => data);
};

export const getSerchedMovie = query => {
  axios.defaults.params = {
    api_key: API_KEY,
    query: query,
  };
  return axios.get(`/search/movie/`).then(({ data }) => data);
};

export const getSerchedMovieById = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get(`/movie/${id}`).then(({ data }) => data);
};
export const getSerchedMovieCast = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get(`/movie/${id}/cast`).then(({ data }) => data);
};

export const getSerchedMovieReview = id => {
  axios.defaults.params = {
    api_key: API_KEY,
  };
  return axios.get(`/movie/${id}/review`).then(({ data }) => data);
};
