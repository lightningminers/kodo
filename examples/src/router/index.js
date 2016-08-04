import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import NoPages from '../components/nopages/';
import IndexPages from '../interface/index/';
import ButtonPages from '../interface/button/'

const propTypes = {
  children: PropTypes.element
};

// Web App 启动

class AppStart extends React.Component {
  render() {
    if (!this.props.children) {
      return null;
    }
    return (
      <div
        className="app-container"
      >
        { this.props.children }
      </div>
    );
  }
}

AppStart.propTypes = propTypes;

module.exports = {
  start() {
    render((
      <Router
        history={ hashHistory }
      >
        <Route
          path="/"
          component={ AppStart }
        >
          <IndexRoute component= { IndexPages } />
          <Route path="button" component={ ButtonPages } />
          <Route path="*" component={ NoPages } />
        </Route>
      </Router>
    ), document.getElementById('app-container'));
  }
};
