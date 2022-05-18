import BtnGoBack from 'components/BtnGoBack/BtnGoBack';
import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSerchedMovieById } from 'utils/moviesApi';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  // const location = useLocation();
  // console.log(movieId);
  // console.log(movieId.id);

  useEffect(() => {
    getSerchedMovieById(movieId)
      .then(data => {
        setMovie(data);
        // console.log(data);
      })
      .catch(error => error);
  }, [movieId]);
  return (
    <>
      <BtnGoBack title={'Go Back'} />
      {movie && <MovieCard movieId={movieId} movie={movie} />}
    </>
  );
}
