import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RouteTo from '../components/RouteTo';

class Navigation extends Component {
  render() {
    const { links } = this.props;
    return (
      <ul className={'navigation'}>
        {links.map((link, key) => (
          <li key={key}>
            <RouteTo className={'navigation__link'} to={link.path}>
              {link.title}
            </RouteTo>
          </li>
        ))}
      </ul>
    );
  }
}

export default Navigation;

Navigation.propTypes = {
  links: PropTypes.array
};
