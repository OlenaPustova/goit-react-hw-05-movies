import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSerchedMovie } from 'utils/moviesApi';

export default function MoviesPage() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  // console.log(location);

  const search = new URLSearchParams(location.search);
  // console.log(search);
  const query = search.get('query');

  useEffect(() => {
    // console.log(query);
    if (query === '') {
      return;
    }
    getSerchedMovie(query)
      .then(data => {
        setMovies(data.results);
        // console.log(data);
      })
      .catch(error => error);
  }, [query]);

  // console.log(movies);
  return (
    <>
      <SearchForm />
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
    </>
  );
}
