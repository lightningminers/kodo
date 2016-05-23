import React,{ PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  value: PropTypes.string,
  status: PropTypes.string
};

const defaultProps = {
  value: '',
  status: ''
};

class Icon extends React.Component {
  render (){
    const {value, children, status, className, methods } = this.props;
    if (!this.props.value) {
      return null;
    }
    let css = classNames({
      ['icon-'+value]:true,
      [status]: !!status,
      [className]: className
    });
    return (
      <i
        {...methods}
        className= {css}
      >
        {children}
      </i>
    );
  }
}

export default Icon;
