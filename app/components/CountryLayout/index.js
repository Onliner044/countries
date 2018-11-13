import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { requestCountries } from 'actions/countries';

import LoadingOverlay from 'base/LoadingOverlay';
import CountryList from './CountryList';
import CountryCard from '../CountryCard';
import Search from '../../components/Search';
import { filterCountries } from '../../helpers/countiesFunctions';

import style from './style.css';

class CountryLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      findCountriesText: '',
      selectedCountry: null
    };

    this.onClick = this.onClick.bind(this);
    this.setFindCountriesText = this.setFindCountriesText.bind(this);
  }

  componentDidMount() {
    this.props.requestCountries();
  }

  onClick(e) {
    const { countries } = this.props;
    const id = e.target.attributes.id.value;

    this.setState(() => ({
      selectedCountry: countries[id]
    }));
  }

  setFindCountriesText(text) {
    this.setState(() => ({
      findCountriesText: text
    }));
  }

  render() {
    const { countries, isLoading } = this.props;
    const { findCountriesText, selectedCountry } = this.state;

    return (
      <div className={style.wrapper}>
        <ul className={style.inlineLi}>
          <li>
            <div>Countries</div>
          </li>
          <li>
            <div className={style.search}>
              <Search
                setFindCountriesText={this.setFindCountriesText}
              />
            </div>
          </li>
        </ul>
        <CountryList
          onClick={this.onClick}
          countries={filterCountries(findCountriesText, countries)}
        />
        <CountryCard country={selectedCountry} />
        <LoadingOverlay isShown={isLoading} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { countries, isLoading } = state.countryData;
  return { countries, isLoading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestCountries: () => dispatch(requestCountries())
  };
};

CountryLayout.propTypes = {
  requestCountries: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryLayout);
