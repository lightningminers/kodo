import React,{ PropTypes } from 'react';
import classNames from 'classnames';
import Mask from '../mask/';
import Alert from './Alert';
import Confirm from './Confirm';

const propTypes = {
  type: PropTypes.string,
  show: PropTypes.bool,
  title: PropTypes.string,
  buttons: PropTypes.array,
}

const defaultProps = {
  type: 'alert',
  show: false,
  title: '',
  buttons: []
}

class Dialog extends React.Component {

  render (){
    const { type, show, className, title } = this.props;
    const css = classNames({
      'dialog-wrap': true,
      'active': show,
      [className]: className
    });
    const Component = type === 'alert' ? Alert : Confirm;
    return (
      <section
        className={ css }
      >
        <Mask type="dialog"/>
        <Component {...this.props }/>
      </section>
    );
  }
}

Dialog.propTypes = propTypes;
Dialog.defaultProps = defaultProps;

export default Dialog;
