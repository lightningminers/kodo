function renderButtons (buttons){
  return buttons.map(( action, idx )=>{
    const { label } = action;
    let type = action.type || 'plain';
    return (
      <a
        {...action}
        type={ type }
        key={ idx }
        href="javascript:;"
      >
        { label }
      </a>
    );
  });
}

export default renderButtons;
