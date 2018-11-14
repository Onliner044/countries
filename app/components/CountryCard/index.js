import React from 'react';

import style from './style.css';

const CountryCard = (props) => {
  const { country } = props;

  if (!country) {
    return null;
  }

  const {
    name,
    nativeName,
    region,
    subregion,
    capital,
    population,
    currencies,
    flag,
  } = country;

  let renderCapital = '';
  let renderPopulation = '';
  if (population) {
    renderPopulation = population;
  }
  if (capital) {
    renderCapital = capital;
    renderPopulation = `(${population})`;
  }

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
              Capital: {renderCapital} {renderPopulation}
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
            }).join(', ')}
          </div>
        ) : null
      }
    </div>
  );
};

export default CountryCard;
