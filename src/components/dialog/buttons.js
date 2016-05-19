import classNames from 'classnames';

function renderButtons (buttons){
  return buttons.map(( action, idx )=>{
    const { label, className } = action;
    const css = classNames({
      ['ft-btn']: true,
      [className]:className
    });
    return (
      <span
        {...action}
        className= { css }
        key={ idx }
      >
        { label }
      </span>
    );
  });
}

export default renderButtons;
