import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Svg from '../svg/'
import Selector from './Selector';

const propTypes = {
  items: PropTypes.array
};

const defaultProps = {
  items: []
};

// type : circle/num

class Footer extends React.Component {

  render (){
    const { items } = this.props;
    if (!items && !items.length) {
      return null;
    }
    const renderItems = items.map((action,idx)=>{
      const { active, type, methods, count, text, svg } = action;
      const liCss = classNames({
        'nav-item': true,
        'active': active
      });
      return (
        <li
          {...methods}
          key={ idx }
          className={ liCss }
        >
          <Svg svg={ svg }/>
          <Selector type={ type } count={ count }/>
          <p
            className="item-txt"
          >
            { text }
          </p>
        </li>
      );
    });
    return (
      <footer className="fixed-bottom">
        <ul className="nav-list nav-list--bottom">
          { renderItems }
        </ul>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
