import React,{ PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/';
import Icon from '../icon/'

const propTypes = {
  icon: PropTypes.string,
  show: PropTypes.bool,
};

const defaultProps = {
  icon: '',
  show: false
};

class Toast extends React.Component {

  render (){
    const { show, children, icon } = this.props;

    return (
      <div style={{display: show ? 'block': 'none'}}>
        <Mask />
        <div className="kodo_toast">
          <div className="kodo_toast_position">
            <Icon value={icon}></Icon>
            { children }
          </div>
        </div>
      </div>
    );
  }
}

export default Toast;
