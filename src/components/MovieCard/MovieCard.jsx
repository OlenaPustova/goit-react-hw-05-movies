import { NavLink, Outlet, useLocation } from 'react-router-dom';
import image from '../../images/no-img.png';

import s from './MovieCard.module.scss';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movieId, movie }) {
  const location = useLocation();
  const { poster_path, title, overview, genres, release_date, vote_average } =
    movie;
  const year = release_date.split('').splice(0, 4).join('');
  return (
    <>
      <div className={s.details}>
        <img
          className={s.img}
          src={poster_path ? BASE_URL + poster_path : image}
          alt={title}
          width="300"
        />
        <div className={s.wrap}>
          <h1>
            {title} ({year})
          </h1>
          <p>User csore: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres.map(genre => {
              return <span key={genre.id}>{genre.name} </span>;
            })}
          </p>
        </div>
      </div>
      <div className={s.info}>
        <h3 className={s['info-title']}>Additional information</h3>
        <NavLink to={`/movies/${movieId}/cast`} state={location.state}>
          Cast
        </NavLink>
        <NavLink to={`/movies/${movieId}/reviews`} state={location.state}>
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
