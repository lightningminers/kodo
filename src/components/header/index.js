import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Selector from './Selector';

const propTypes = {
  title: PropTypes.string,
  modal: PropTypes.string,
  tags: PropTypes.array,
  complex: PropTypes.array,
  leftItem: PropTypes.array,
  rightItem: PropTypes.array
}

const defaultProps = {
  title: '', //标题
  tags: [], // 选项标题
  complex: [], //复合标题
  modal: 'normal'  //mutil,
  leftItem: [],
  rightItem: []
}

class Header extends React.Component {
  render (){
    return (
      <header className="header">
        <div className="header-left"></div>
        <div className="header-right"></div>
        <Selector {...this.props} />
      </header>
    );
  }
}

export default Header;
