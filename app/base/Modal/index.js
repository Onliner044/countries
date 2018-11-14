import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.scss';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.input = React.createRef();
  }

  render() {
    const {
      open,
      className,
      children,
      handlerClose,
      ...props
    } = this.props;

    const modalStyle = open ? style.modalOpen : style.modalClose;

    return (
      <div className={modalStyle} >
        <div
          {...props}
          className={classnames(modalStyle, className)}
          ref={this.input}
        >
          {children}
          <div
            role="link"
            tabIndex={-10}
            className={style.close}
            onClick={() => { handlerClose(); }}
          />
        </div>
        <div
          role="link"
          tabIndex={-9}
          className={style.overlay}
          onClick={() => { handlerClose(); }}
        />
      </div>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.shape({}),
  handlerClose: PropTypes.func
};

export default Modal;
