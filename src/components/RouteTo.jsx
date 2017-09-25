import React, { Component } from 'react';

import { NavLink as Link } from 'react-router-dom';

function RouteTo(props) {
  return <Link {...props} activeClassName="active" />;
}

export default RouteTo;
