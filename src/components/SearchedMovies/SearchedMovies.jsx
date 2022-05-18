// import MoviesList from 'components/MoviesList/MoviesList';
// import SearchForm from 'components/SearchForm/SearchForm';
// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { getSerchedMovie } from 'utils/moviesApi';

// export default function SearchedMovies() {
//   const location = useLocation();
//   const [movies, setMovies] = useState([]);
//   // const [query, setQuery] = useState('');

//   const search = new URLSearchParams(location.search);
//   const query = search.get('query');

//   useEffect(() => {
//     if (query === '') {
//       return;
//     }
//     getSerchedMovie(query)
//       .then(data => {
//         setMovies(data.results);
//         // console.log(data);
//       })
//       .catch(error => error);
//   }, [query]);
//   return (
//     <>
//       <SearchForm />
//       {movies.length > 0 && <MoviesList movies={movies} />}
//     </>
//   );
// }
