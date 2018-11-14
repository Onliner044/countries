const filterCountries = (countryName, countries) => {
  if (countryName !== '') {
    return countries.filter((countrie) => {
      const countrieName = countrie.name.toLowerCase();
      countryName = countryName.toLowerCase();

      if (countrieName.indexOf(countryName) !== -1) {
        return true;
      }

      const altNames = countrie.altSpellings;

      let result = false;
      if (altNames && altNames.length > 0) {
        altNames.every((name) => {
          name = name.toLowerCase();

          if (name.indexOf(countryName) !== -1) {
            result = true;
            return false;
          }

          return true;
        });
      }

      return result;
    });
  }

  return countries;
};

export { filterCountries }