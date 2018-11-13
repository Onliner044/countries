const filterCountries = (findCountrie, countries) => {
  if (findCountrie !== '') {
    return countries.filter((countrie) => {
      const countrieName = countrie.name.toLowerCase();
      findCountrie = findCountrie.toLowerCase();

      if (countrieName.indexOf(findCountrie) !== -1) {
        return true;
      }

      const altNames = countrie.altSpellings;

      let result = false;
      if (altNames && altNames.length > 0) {
        altNames.every((name) => {
          name = name.toLowerCase();

          if (name.indexOf(findCountrie) !== -1) {
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