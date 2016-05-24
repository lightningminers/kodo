import Icon from '../icon/'

function LeftItem (props){
  const { leftItem } = props;
  const { icon, text } = leftItem;
  if (icon) {
    return (
      <Icon
        value={ icon }
        className="header-icon js-back"
      />
    );
  } else {
    if (text) {
      return (
        <span
          className="header-btn"
        >
          { text }
        </span>
      );
    } else {
      return (
        <span className="header-mix">
          <Icon
            value={ icon }
          />
          <span className="mix-txt">
            { text }
          </span>
        </span>
      );
    }
  }
  return null;
}

export default LeftItem;
