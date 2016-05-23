import Icon from '../icon/';

function RightItem (props){
  const rightItem  = props;
  if (!rightItem && !rightItem.length) {
    return null;
  }
  const Component = rightItem.map((action, idx) => {
    const { icon, text, methods } = action;
    if (icon) {
      return (
        <Icon
          methods={methods}
          key={idx}
          value={ icon }
          className="header-icon"
        />
      );
    } else {
      if (text) {
        return (
          <span
            {...methods}
            key={idx}
            className="header-btn"
          >
            { text }
          </span>
        );
      }
    }
    return null;
  });
  return Component;
}

export default RightItem;
