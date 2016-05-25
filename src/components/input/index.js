import React, { PropTypes } from 'react';
import Clear from './Clear';
import Normal from './Normal';
import Text from './Text';

const propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  featrue: PropTypes.string,
  mutable: PropTypes.bool,
  placeholder: PropTypes.bool
};
const defaultProps = {
  label: '',
  type: 'text',
  value: '',
  featrue: 'text',  //clear
  mutable: true,
  placeholder: false
};

class Input extends React.Component {

  constructor(props){
    super(props);
  }

  render (){
    const { type, label, featrue, methods, value, mutable, featrueMethods, placeholder } = this.props;
    let FeatrueInput = null;
    switch (featrue) {
      case 'clear':
        FeatrueInput = Clear;
        break;
      case 'normal':
        FeatrueInput = Normal;
        break;
      default:
        FeatrueInput = Text;
    }
    return (
      <FeatrueInput
        type={ type }
        label={ label }
        methods={ methods }
        value={ value }
        mutable={ mutable }
        featrueMethods={ featrueMethods }
        placeholder={ placeholder }
      />
    );
  }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
