import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { setRoomsSorter } from 'actions/rooms';

import { ASC, DESC } from 'constants';

import style from './style.scss';

class TableComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortingColumn: props.body && props.body.length > 0 ? props.body[0].name : null,
      sortingOrder: ASC
    };
  }

  handleColumnSortingClick = (event, rowNumber, colNumber) => {
    const { sorter, header, onSetSorter } = this.props;

    const targetColumn = header[colNumber - 1];

    if (targetColumn && sorter.column) {
      if (sorter.column === targetColumn.alias) {
        // this.setState({ sortingOrder: currentSortingOrder === ASC ? DESC : ASC });
        onSetSorter({
          column: targetColumn.alias,
          order: sorter.order === ASC ? DESC : ASC
        });
      } else {
        onSetSorter({
          column: targetColumn.alias,
          order: sorter.order
        });
        // this.setState({ sortingColumn: targetColumn.alias });
      }
    }
  }

  sortTable = (a, b) => {
    const columnName = (this.state.sortingColumn || 'id').toLowerCase();
    const columnOrder = (this.state.sortingOrder || ASC);

    if ({}.hasOwnProperty.call(a, columnName) && {}.hasOwnProperty.call(b, columnName)) {
      if (a[columnName] > b[columnName]) {
        return columnOrder === ASC ? 1 : -1;
      } else if (a[columnName] < b[columnName]) {
        return columnOrder === ASC ? -1 : 1;
      }

      return 0;
    }

    return 0;
  }

  renderHeader = () => {
    const { header } = this.props;

    return (
      <TableHeader>
        <TableRow onCellClick={this.handleColumnSortingClick}>
          { header.map(this.renderTableHeaderColumn) }
        </TableRow>
      </TableHeader>
    );
  }

  renderTableHeaderColumn = (cell, i) => {
    const { name } = this.props;

    const classes = [
      style.tableHeaderSorter
    ];

    if (this.state.sortingColumn === cell.alias) {
      classes.push(style.currentSortingCell);
      classes.push(this.state.sortingOrder === ASC ? style.ascSorting : style.deskSorting);
    }

    return (
      <TableHeaderColumn
        role="link"
        tabIndex={-1}
        key={`${name}-header-${i}`}
        className={classnames(...classes)}
      >
        {cell.name}
      </TableHeaderColumn>
    );
  }

  renderBody = () => {
    const { data } = this.props;

    return (
      <TableBody>
        {
          data
            .sort(this.sortTable)
            .map(this.renderBodyRow)
        }
      </TableBody>
    );
  }

  renderBodyRow = (row, i) => {
    const { body } = this.props;

    return (
      <TableRow key={i}>
        { body.map((field, j) => {
          return this.renderBodyCell(row, field, j);
        }) }
      </TableRow>
    );
  }

  renderBodyCell = (row, field, i) => {
    const { name } = this.props;

    return (
      <TableRowColumn key={`${name}-row-${i}`}>
        {row[field.name]}
      </TableRowColumn>
    );
  }

  render() {
    return (
      <div className={style.tableWrapper}>
        <div className={style.div_table}>
          <Table className={style.table}>
            { this.renderHeader() }
            { this.renderBody() }
          </Table>
        </div>
      </div>
    );
  }
}

TableComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})),
  body: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  header: PropTypes.arrayOf(PropTypes.shape({})),
  name: PropTypes.string,
  sorter: PropTypes.shape({
    order: PropTypes.string.isRequired,
    column: PropTypes.string.isRequired
  }).isRequired,
  onSetSorter: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    sorter: state.rooms.sorter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSorter: ({ column, order }) => {
      dispatch(setRoomsSorter({ column, order }));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
