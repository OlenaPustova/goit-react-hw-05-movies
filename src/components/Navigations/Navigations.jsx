import { NavLink } from 'react-router-dom';
import s from './Navigations.module.scss';

export default function Navigations() {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Movie
      </NavLink>
    </nav>
  );
}
