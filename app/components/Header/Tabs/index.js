import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab } from 'material-ui/Tabs';

import style from './style.scss';

const TabsComponent = (props) => {
  const { tabs, history } = props;

  return (
    <Tabs
      className={style.tabs}
      onChange={(value) => { history.push(value); }}
    >
      {
        tabs.map((tab, index) => (
          <Tab
            className={style.tab}
            key={index}
            label={tab.title}
            value={tab.path}
          />
        ))
      }
    </Tabs>
  );
};

TabsComponent.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({})),
  history: PropTypes.shape({})
};

TabsComponent.defaultProps = {
  tabs: [
    {
      path: '/',
      title: 'All'
    },
    {
      path: '/аvailable',
      title: 'Available'
    },
    {
      path: '/in-progress',
      title: 'In progress'
    },
    {
      path: '/discrepancies',
      title: 'Discrepancies'
    }
  ]
};

export default withRouter(TabsComponent);
