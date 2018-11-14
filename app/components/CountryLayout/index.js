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
      isFilter: false,
      filterCountries: props.countries,
      selectedCountry: null,
    };
  }

  componentDidMount() {
    this.props.requestCountries();
  }

  onClick = (e) => {
    const id = e.target.attributes.id.value;

    this.setState(state => ({
      selectedCountry: state.filterCountries[id],
    }));
  }

  setFilterCountries = (text) => {
    const { countries } = this.props;

    const isFilter = text !== '';
    this.setState(() => ({
      isFilter,
      filterCountries: filterCountries(text, countries),
    }));
  }

  render() {
    const { isLoading, countries } = this.props;
    const { selectedCountry, filterCountries, isFilter } = this.state;

    let countriesShown;
    if (isFilter) {
      countriesShown = filterCountries;
    } else {
      countriesShown = countries;
    }

    return (
      <div className={style.wrapper}>
        <ul className={style.inlineLi}>
          <li>
            <div>Countries</div>
          </li>
          <li>
            <div className={style.search}>
              <Search
                setFindCountriesText={this.setFilterCountries}
              />
            </div>
          </li>
        </ul>
        <CountryList
          onClick={this.onClick}
          countries={countriesShown}
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

const mapDispatchToProps = dispatch => ({
  requestCountries: () => dispatch(requestCountries()),
});

CountryLayout.propTypes = {
  requestCountries: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryLayout);
