import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  items: PropTypes.array
};

const defaultProps = {
  items: []
};

class Nav extends React.Component {
  render (){
    const { items } = this.props;
    if (!items && !items.length) {
      return null;
    }
    const renderItems = items.map((action, idx)=>{
      const { active, text, methods, url } = action;
      const css = classNames({
        'nav-item': true,
        'active': active
      });
      const Url = url ? url : '#';
      return (
        <li
          {...methods}
          key={ idx }
          className={ css }
        >
          <a
            className="item-txt"
            href={ Url }
          >
            { text }
          </a>
        </li>
      );
    });
    return (
      <nav
        className="nav-top"
      >
        <ul
          className="nav-list nav-list--top"
        >
          { renderItems }
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = propTypes;
Nav.defaultProps = defaultProps;

export default Nav;
