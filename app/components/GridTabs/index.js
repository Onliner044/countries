import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import LoadingOverlay from 'base/LoadingOverlay';
import Table from 'base/Table';

import {
  GRID_FILTER_ALL,
  GRID_FILTER_AVAILABLE,
  GRID_FILTER_IN_PROGRESS,
  GRID_FILTER_DISCREPANCIES,
  ROOM_STATUS_CLEAN,
  ROOM_STATUS_IN_PROGRESS,
  ROOM_OCCUPANCY_VACANT
} from 'constants';

import style from './style.scss';

class GridTabs extends Component {
  constructor(props) {
    super(props);

    this.applyFilterStrategy = this.applyFilterStrategy.bind(this);
    this.allRoomsFilter = this.allRoomsFilter.bind(this);
    this.availableRoomsFilter = this.availableRoomsFilter.bind(this);
    this.discrepanciRoomFilter = this.discrepanciRoomFilter.bind(this);
    this.inProgressRoomFilter = this.inProgressRoomFilter.bind(this);
  }

  componentWillMount() {}

  applyFilterStrategy() {
    const { query = '', filter, rooms } = this.props;
    let filteredRooms = [];

    switch (filter) {
      case `${GRID_FILTER_ALL}`:
        filteredRooms = this.allRoomsFilter();
        break;

      case `${GRID_FILTER_AVAILABLE}`:
        filteredRooms = this.availableRoomsFilter();
        break;

      case `${GRID_FILTER_IN_PROGRESS}`:
        filteredRooms = this.inProgressRoomFilter();
        break;

      case `${GRID_FILTER_DISCREPANCIES}`:
        filteredRooms = this.discrepanciRoomFilter();
        break;

      default: filteredRooms = rooms;
    }

    // Apply Search Field Filter
    return filteredRooms
      .filter((room) => {
        const id = (room.id || '').toLowerCase().indexOf(query) !== -1;
        const clearingStatus = (room.status || '').toLowerCase().indexOf(query) !== -1;
        const occupancyStatus = (room.occupancy || '').toLowerCase().indexOf(query) !== -1;

        return id || clearingStatus || occupancyStatus;
      });
  }

  allRoomsFilter() {
    const { rooms } = this.props;

    return rooms;
  }

  availableRoomsFilter() {
    const { rooms } = this.props;

    return rooms
      .filter((room) => {
        const status = (room.status || '').toLowerCase();
        const occupancy = (room.occupancy || '').toLowerCase();

        return status === ROOM_STATUS_CLEAN && occupancy === ROOM_OCCUPANCY_VACANT;
      });
  }

  discrepanciRoomFilter() {
    const { rooms } = this.props;

    return rooms;
  }

  inProgressRoomFilter() {
    const { rooms } = this.props;

    return rooms
      .filter(room => {
        const status = (room.status || '').toLowerCase();

        return status === ROOM_STATUS_IN_PROGRESS;
      });
  }

  render() {
    const { isLoading, body, header } = this.props;

    return (
      <div className={style.wrapper}>
        <Table
          header={header}
          body={body}
          data={this.applyFilterStrategy()}
          name="all"
          key="all"
        />
        <LoadingOverlay isShown={isLoading} />
      </div>
    );
  }
}

const selector = formValueSelector('search');

const mapStateToProps = (state) => {
  const { rooms } = state;

  return {
    query: selector(state, 'query'),
    rooms: rooms.data,
    isLoading: rooms.isLoading
  };
};

const mapDispatchToProps = () => {
  return {};
};


GridTabs.propTypes = {
  query: PropTypes.string,
  filter: PropTypes.string.isRequired,
  rooms: PropTypes.arrayOf(PropTypes.shape({})),
  header: PropTypes.arrayOf(PropTypes.shape({})),
  body: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool
};

GridTabs.defaultProps = {
  query: ''
};

GridTabs.defaultProps = {
  header: [
    { name: '#', alias: 'id' },
    { name: 'Type', alias: 'type' },
    { name: 'Task', alias: 'task' },
    { name: 'Status', alias: 'status' },
    { name: 'Priority', alias: 'priority' },
    { name: 'Remark', alias: 'remark' }
  ],
  body: [
    { name: 'id' },
    { name: 'type' },
    { name: 'task' },
    { name: 'status' },
    { name: 'priority' },
    { name: 'remark' }
  ]
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(GridTabs));
