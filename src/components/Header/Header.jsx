import Navigations from 'components/Navigations/Navigations';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <Navigations />
    </header>
  );
}
