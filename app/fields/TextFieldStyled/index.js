import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from 'base/InputWrapper';
import TextInput from 'base/TextInput';
import FontAwesome from 'react-fontawesome';

import style from './style.scss';

const TextFieldStyled = ({
  className,
  meta,
  input,
  ...props
}) => {
  return (
    <InputWrapper className={className} meta={meta} {...props}>
      <FontAwesome
        name="search"
        className={style.icon}
      />
      <TextInput
        {...props}
        {...input}
        className={style.input}
      />
    </InputWrapper>
  );
};

TextFieldStyled.propTypes = {
  className: PropTypes.string,
  meta: PropTypes.shape({}).isRequired,
  input: PropTypes.shape({}).isRequired
};

export default TextFieldStyled;
