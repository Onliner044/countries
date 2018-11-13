import React from 'react';
import SearchForm from 'forms/SearchForm';
import style from './style.scss';

const Search = () => {
  return (
    <div className={style.search}>
      <SearchForm />
    </div>
  );
};

export default Search;
