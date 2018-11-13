import React from 'react';
import PropTypes from 'prop-types';

import style from './style.css';

const CountryList = (props) => {
  const { countries, onClick } = props;

  return (
    <div className={style.wrapper}>
      {
        countries.map((country, index) => {
          return (
            <div key={`country-${index}-${country.name}`}>
              <div
                className={style.listItem}
                onClick={onClick}
                id={index}
              >
                {country.name}, {country.region}
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  onClick: PropTypes.func
};

export default CountryList;
