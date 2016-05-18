import classNames from 'classnames';

function renderButtons (buttons){
  return buttons.map(( action, idx )=>{
    let type = action.type || 'plain';
    const { label, className } = action;
    const css = classNames({
      ['kodo_buttons_'+type]: type,
      [className]:className
    });
    return (
      <a
        {...action}
        key={ idx }
        className={ css }
        href="javascript:;"
      >
        { label }
      </a>
    );
  });
}

export default renderButtons;
