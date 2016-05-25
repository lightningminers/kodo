import React, { PropTypes } from 'react';
import Mask from '../mask/';
import renderItems from './renderItems';

const propTypes = {
  items: PropTypes.array,
  buttons: PropTypes.array,
  animation: PropTypes.string,
  show: PropTypes.bool
};

const defaultProps = {
  items: [],
  buttons: [],
  animation: 'normal',
  show: false
};

class ActionSheet extends React.Component {
  render (){
    const { animation, items, buttons, show } = this.props;
    return (
      <div
        style={{display:show ? 'block' : 'none'}}
      >
        <Mask type="action-sheet"/>
        <section
          className="actionsheet"
        >
          <ul className="line-list line-list--center">
            { renderItems(items) }
          </ul>
          <ul
            className="line-list line-list--center"
          >
            { renderItems(buttons) }
          </ul>

        </section>
      </div>
    );
  }
}

ActionSheet.propTypes = propTypes;
ActionSheet.defaultProps = defaultProps;

export default ActionSheet;
