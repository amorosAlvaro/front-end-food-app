import { useState } from 'react';
import useApiState from 'hooks/useApiState';
import './Search.scss';
import backgroundImage from '../assets/img/fruits-background.jpg';
import searchIcon from '../assets/icons/magnifying-glass.svg';

const Search = () => {
  const [input, setInput] = useState('');
  const { displayRecipeList } = useApiState();

  const handleSubmit = (e, input) => {
    e.preventDefault();
    displayRecipeList(input);
  };

  return (
    <section className="search-container">
      <h2 className="search-container__header">
        What do you want to eat today?
      </h2>
      <img
        className="search-container__background"
        src={backgroundImage}
        alt="A variety of fruits and vegetables"
      />
      <form
        onSubmit={(e) => handleSubmit(e, input)}
        className="search-container-form"
      >
        <label
          className="search-container-form__label"
          htmlFor="search-container-form__input"
        >
          Search
        </label>
        <input
          value={input}
          autoComplete="off"
          onChange={(e) => setInput(e.target.value)}
          className="search-container-form__input"
          id="search-container-form__input"
        />
        {input.length > 0 && (
          <button
            onClick={() => setInput('')}
            type="button"
            className="search-container-form__delete"
          >
            X
          </button>
        )}
        <button className="search-container-form__submit">
          <img
            src={searchIcon}
            className="search-container-form__icon"
            alt="Magnifying glass icon"
          />
        </button>
      </form>
    </section>
  );
};

export default Search;
