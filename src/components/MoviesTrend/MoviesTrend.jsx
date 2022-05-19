import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendsMovies } from 'utils/moviesApi';

export default function MoviesTrend() {
  const location = useLocation();

  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendsMovies()
      .then(data => {
        setTrends(data.results);
      })
      .catch(error => error);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {trends.length > 0 && <MoviesList movies={trends} location={location} />}
    </>
  );
}
