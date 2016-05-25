import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  type: PropTypes.string
};

const defaultProps = {
  type: 'normal'
};

class Forms extends React.Component {
  render (){
    const { children, type } = this.props;
    const css = classNames({
      form: true,
      ['form--no-' + type]: type !== 'normal'
    });
    return (
      <form
        className={ css }
      >
        { children }
      </form>
    );
  }
}

Forms.propTypes = propTypes;
Forms.defaultProps = defaultProps;

export default Forms;
