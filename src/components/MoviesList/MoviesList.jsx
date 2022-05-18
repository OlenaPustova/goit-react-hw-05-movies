// import SearchForm from 'components/SearchForm/SearchForm';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.scss';

export default function MoviesList({ movies, location }) {
  // console.log(movies);
  return (
    <ul className={s.list}>
      {movies.map(item => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`} state={location}>
            {item.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}