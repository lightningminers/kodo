import React,{ PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  value: PropTypes.string
};

class Icon extends React.Component {
  render (){
    const {value, children} = this.props;
    if (!this.props.value) {
      return null;
    }
    let css = classNames({
      ['ion-'+value]:true
    });
    return (
      <i className= {css}>
        {children}
      </i>
    );
  }
}

export default Icon;
