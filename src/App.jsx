// import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
// import HomePage from 'components/HomePage/HomePage';
// import Navigations from 'components/Navigations/Navigations';
// import Header from 'components/Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
// import MovieDetailsPage from 'pages/MovieDetailsPage';

const MainWrapper = lazy(() => import('./components/MainWrapper/MainWrapper'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export default function App() {
  return (
    <div className={s.App}>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<MainWrapper />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </div>
  );
}
