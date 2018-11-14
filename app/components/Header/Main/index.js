import React, { Component } from 'react';
import classnames from 'classnames';
import Modal from 'base/Modal';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style.scss';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openModal: false
    };
  }

  handlerClose = () => {
    const { openModal } = this.state;
    this.setState({ openModal: !openModal });
  }

  render() {
    const { openModal } = this.state;

    return (
      <div className={style.main}>
        <Link to="/" className={style.titleLink}>Dashboard</Link>
        <RaisedButton
          label="Check out"
          className={classnames(style.checkoutButton, style.titleLink)}
          onClick={() => { this.setState({ openModal: !openModal }); }}
        />
        <Modal
          open={openModal}
          handlerClose={this.handlerClose}
        >
          <div>NTRCN</div>
        </Modal>
      </div>
    );
  }
}

export default Main;
