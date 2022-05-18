// import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.scss';
// import HomePage from 'components/HomePage/HomePage';
// import Navigations from 'components/Navigations/Navigations';
import Header from 'components/Header/Header';
import { Outlet, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import MovieDetailsPage from 'pages/MovieDetailsPage';

const MainWrapper = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <div className={s.App}>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
