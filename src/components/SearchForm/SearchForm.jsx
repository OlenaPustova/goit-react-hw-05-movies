import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchForm() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

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
    <form onSubmit={handleSubmit}>
      <input value={input} type="text" name="search" onChange={handleChange} />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
