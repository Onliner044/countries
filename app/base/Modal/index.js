import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import style from './style.scss';

class Modal extends Component {
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
          ref={(node) => { this.input = node; }}
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
