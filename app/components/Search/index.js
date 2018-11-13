import React, { Component } from 'react';

import images from './images';

import style from './style.css';

class Search extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { setFindCountriesText } = this.props;

    const text = this.search.value;
    setFindCountriesText(text);
  }

  render() {
    return (
      <div className={style.search}>
        <input
          placeholder="Search"
          ref={node => { this.search = node; }}
        />
        <img
          onClick={this.onClick}
          className={style.img}
          src={images.lupa}
          alt=""
        />
      </div>
    );
  }
}

export default Search;
