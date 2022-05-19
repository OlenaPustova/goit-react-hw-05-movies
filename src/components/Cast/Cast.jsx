import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSerchedMovieCast } from 'utils/moviesApi';
import s from './Cast.module.scss';

const BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export default function Cast() {
  const [cast, setCast] = useState();
  const movieId = useParams().movieId;

  useEffect(() => {
    getSerchedMovieCast(movieId)
      .then(data => {
        setCast(data.cast);
      })
      .catch(error => error);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {cast && (
        <ul className={s.list}>
          {cast.map(item => (
            <li key={item.id} className={s.actor}>
              <img
                src={BASE_URL + item.profile_path}
                alt={item.name}
                width="200"
                height="300"
              />
              <p>{item.name}</p>
              <p>Character: {item.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
