import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ReactSelect from 'react-select';
import 'react-select/dist/react-select.css';
import style from './style.css';


class SelectInput extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  componentDidMount() {
    this.focus = () => this.input.focus();
  }

  render() {
    const {
      className,
      ...props
    } = this.props;

    return (
      <ReactSelect
        {...props}
        className={classnames(style.select, className)}
        ref={this.input}
      />
    );
  }
}

SelectInput.propTypes = {
  className: PropTypes.string
};

export default SelectInput;
