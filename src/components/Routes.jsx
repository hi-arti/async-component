import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Route, Redirect, Switch } from 'react-router-dom';

class Routes extends Component {
  render() {
    const { routes } = this.props;
    return (
      <div>
        <Switch>
          {routes.length > 0 && <Redirect from="/" exact to={routes[0].path} />}
          {routes.map((route, key) => <Route key={key} {...route} />)}
        </Switch>
      </div>
    );
  }
}

export default Routes;

Routes.propTypes = {
  routes: PropTypes.array
};
