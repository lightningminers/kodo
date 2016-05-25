
function renderItems (items){
  if (!items || !items.length) {
    return null;
  }
  return items.map((action, idx)=>{
    const { children, methods } = action;
    return(
      <li
        {...methods}
        key={ idx }
        className="line-item"
      >
        { children }
      </li>
    )
  });
}

export default renderItems;
