import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { getRooms } from 'actions/rooms';

const TIMEOUT = 10000;

class ApplicationWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      socketDescriptor: null
    };

    this.onSocketRequest = this.onSocketRequest.bind(this);
  }

  componentWillMount() {
    this.setState({
      socketDescriptor: setInterval(this.onSocketRequest, TIMEOUT)
    });

    this.onSocketRequest();
  }

  componentWillUnmount() {
    clearInterval(this.state.socketDescriptor);
  }

  onSocketRequest() {
    const { onGetRooms } = this.props;

    onGetRooms({
      filter: {},
      page: 1,
      limit: 10
    });
  }

  render() {
    const { children } = this.props;

    return (
      <MuiThemeProvider>
        <div className="application-wrapper">
          { children }
        </div>
      </MuiThemeProvider>
    );
  }
}

ApplicationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  onGetRooms: PropTypes.func.isRequired
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetRooms: ({ filter, page, limit }) => {
      dispatch(getRooms({ filter, page, limit }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationWrapper);
