import React from 'react';

import images from './images';

import style from './style.css';

const Search = (props) => {
  const search = React.createRef();

  const onClick = () => {
    const { setFindCountriesText } = props;

    const text = search.current.value;
    setFindCountriesText(text);
  };

  return (
    <div className={style.search}>
      <input
        placeholder="Search"
        ref={search}
      />
      <img
        onClick={onClick}
        className={style.img}
        src={images.lupa}
        alt=""
      />
    </div>
  );
};

export default Search;
