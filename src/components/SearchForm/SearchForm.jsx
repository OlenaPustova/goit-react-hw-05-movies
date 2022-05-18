import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getSerchedMovie } from 'utils/moviesApi';
import s from './SearchForm.module.scss';

export default function SearchForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  // let id = 255;

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setQuery(input);

    // '/movies?query=';
    navigate({
      pathname: '/movies',
      search: 'query=' + input,
    });
    reset();
  };

  const reset = () => {
    setInput('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        value={input}
        type="text"
        name="search"
        className={s.input}
        onChange={handleChange}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
