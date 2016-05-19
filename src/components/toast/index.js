import React,{ PropTypes } from 'react';
import classNames from 'classnames';
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
    const { show, children, icon, className } = this.props;
    const css = classNames({
      'toast-wrap':true,
      'active': show,
      [className]: className
    });
    return (
      <section
        className={ css }
      >
        <div className="toast">
          <p className="toast-txt">{ children }</p>
        </div>
      </section>
    );
  }
}

export default Toast;
