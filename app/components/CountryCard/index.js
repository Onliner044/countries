import React, { Component } from 'react';

import style from './style.css';

class CountryCard extends Component {
  constructor(props) {
    super(props);

    this.renderCountryCard = this.renderCountryCard.bind(this);
  }

  renderCountryCard() {
    const { country } = this.props;

    if (!country) {
      return <div className={style.box} />;
    }

    const {
      name,
      nativeName,
      region,
      subregion,
      capital,
      population,
      currencies,
      flag
    } = country;

    return (
      <div className={style.box}>
        <ul className={style.ul}>
          {name && <li>{name}</li>}
          {nativeName && <li>{nativeName}</li>}
          {flag && <li><img className={style.img} src={flag} alt="" /></li>}
        </ul>
        <div className={style.line} />
        {region && <div>Region: {region}</div>}
        {subregion && <div>Subregion: {subregion}</div>}
        {capital || population
          ? (
            <div>
              Capital: {capital || ''} {population ? `(${population})` : ''}
            </div>
          ) : null}
        {currencies.length > 0
          ? (
            <div>
              Currencies:
              {currencies.map((currencie) => {
                const { symbol, code } = currencie;
                let renderSymbol = '';
                let renderCode = '';

                if (code) {
                  renderCode = code;
                }
                if (symbol) {
                  renderSymbol = symbol;
                  renderCode = `(${code})`;
                }

                return `${renderSymbol} ${renderCode}`;
              }).join(',')}
            </div>
          ) : null
        }
      </div>
    );
  }

  render() {
    return (
      this.renderCountryCard()
    );
  }
}

export default CountryCard;
