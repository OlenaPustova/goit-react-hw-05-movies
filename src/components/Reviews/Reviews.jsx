import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSerchedMovieReview } from 'utils/moviesApi';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const movieId = useParams().movieId;

  useEffect(() => {
    getSerchedMovieReview(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => error);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h4>Author: {item.author}</h4>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
