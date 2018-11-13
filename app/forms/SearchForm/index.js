import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import TextFieldStyled from 'fields/TextFieldStyled';

import style from './style.scss';

const SearchForm = ({ handleSubmit }) => {
  return (
    <form className={style.formWrapper} onSubmit={handleSubmit(() => ({}))}>
      <div className={style.input}>
        <div>
          <Field
            name="query"
            component={TextFieldStyled}
            className={style.search}
            type="text"
          />
        </div>
      </div>
    </form>
  );
};


SearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'search'
})(SearchForm);
