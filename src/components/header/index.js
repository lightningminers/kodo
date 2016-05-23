import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Selector from './Selector';
import LeftItem from './LeftItem';
import RightItem from './RightItem';

const propTypes = {
  title: PropTypes.string,
  modal: PropTypes.string,
  tags: PropTypes.array,
  complex: PropTypes.array,
  leftItem: PropTypes.object,
  rightItem: PropTypes.array
}

const defaultProps = {
  title: '', //标题
  tags: [], // 选项标题
  complex: [], //复合标题
  modal: 'normal',  //mutil
  leftItem: {
    icon: 'v-left',
    text: '',
    methods: {}
  },
  rightItem: [
    {
      idx: '1',
      icon: 'dots',
      text: '',
      methods: {}
    }
  ]
}

class Header extends React.Component {
  render (){
    const { leftItem, style, rightItem } = this.props;
    const { methods } = leftItem;
    return (
      <header
        style={ style }
        className="header"
      >
        <div
          {...methods}
          className="header-left"
        >
          <LeftItem leftItem={ leftItem }/>
        </div>
        <div className="header-right">
          { RightItem(rightItem) }
        </div>
        <Selector {...this.props} />
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
