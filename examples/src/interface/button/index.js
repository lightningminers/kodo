import React, { PropTypes } from 'react';
import { Button } from '../../../../dist/kodo';
import ComponentTitle from '../../components/header/';

const propTypes = {
  title: PropTypes.string
}

const defaultProps = {
  title: 'Button'
};

class ButtonPages extends React.Component {

  constructor(props) {
    super(props);
    this._handlerPer = this.handlerPer.bind(this);
  }

  handlerPer(e){
    e.preventDefault();
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <ComponentTitle title={ title }/>
        <div>
          <Button
            href="https://github.com/icepy"
            onClick={ this._handlerPer }
            style={{margin:5}}
          >
						default
					</Button>
					<Button
            type="primary"
            href="https://github.com/icepy"
            onClick={ this._handlerPer }
            style={{margin:5}}
          >
						primary
					</Button>
					<Button
            type="stress"
            href="https://github.com/icepy"
            onClick={ this._handlerPer }
            style={{margin:5}}
          >
						stress
					</Button>
					<Button type="outline" tag="span" style={{margin:5}}>
						outline
					</Button>
					<Button disabled={true} style={{margin:5}}>disabled</Button>
					<Button type="primary" size="full">Full button</Button>
					<Button type="stress" size="small" style={{margin:5}}>small button</Button>
        </div>
      </div>
    );
  }
}

ButtonPages.propTypes = propTypes;
ButtonPages.defaultProps = defaultProps;

export default ButtonPages;
