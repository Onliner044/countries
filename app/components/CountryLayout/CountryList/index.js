import React, { Component } from 'react';

import PropTypes from 'prop-types';
import BottomToolTip from '../../BottomToolTip';

import style from './style.css';

class CountryList extends Component {
  constructor(props) {
    super(props);

    this.selectCountrie = null;

    this.state = {
      showToolTip: false
    };

    this.onClick = this.onClick.bind(this);
    this.onCloseToolTip = this.onCloseToolTip.bind(this);

    document.documentElement.onclick = this.onCloseToolTip;
  }

  onClick(e) {
    const { countries } = this.props;

    const id = e.target.attributes.id.value;
    this.selectCountrie = countries[id];

    this.setState(() => ({
      showToolTip: true
    }));
  }

  onCloseToolTip(e) {
    const id = e.target.attributes.id;

    if (id && id.value === 'tooltipCountry') {
      return;
    }

    this.setState(() => ({
      showToolTip: false
    }));
  }

  render() {
    const { countries } = this.props;
    const { showToolTip } = this.state;

    return (
      <div className={style.countries}>
        <div
          className={style.wrapper}
          ref={node => { this.div = node; }}
        >
          {
            countries.map((country, index) => {
              return (
                <div key={`country-${index}-${country.name}`}>
                  <div
                    className={style.listItem}
                    onClick={this.onClick}
                    id={index}
                  >
                    {country.name}, {country.region}
                  </div>
                </div>
              );
            })
          }
        </div>
        {showToolTip
          ? (
            <BottomToolTip
              countrie={this.selectCountrie}
            />
          )
          : null}
      </div>
    );
  }
}

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({}))
};

export default CountryList;
