import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation, useParams } from 'react-router-dom';
import { getTrendsMovies } from 'utils/moviesApi';
// import s from '../MoviesTrend';
// import s from './MoviesTrend.module.scss';

export default function MoviesTrend() {
  const location = useLocation();

  // const match = useLocation();
  // console.log(match);
  const [trends, setTrends] = useState([]);
  console.log(location);
  // const { params } = useParams();
  // console.log(params);
  // console.log(params);

  useEffect(() => {
    getTrendsMovies()
      .then(data => {
        // console.log(data);
        setTrends(data.results);
      })
      .catch(error => error);
  }, []);
  // console.log(trends);

  return (
    <>
      <h1>Trending today</h1>
      {trends.length > 0 && <MoviesList movies={trends} location={location} />}
      {/* <ul className={s.list}>
        {trends.map(item => (
          <li key={item.id}>
            <Link to={`movie/${item.id}`}>{item.original_title}</Link>;
          </li>
        ))}
      </ul> */}
    </>
  );
}

//  <Link to={`${url}/${item.id}`}>{item.original_title}</Link>;
