import { Link } from 'react-router-dom';

export default function MoviesList({ movies, location }) {
  return (
    <ul>
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
