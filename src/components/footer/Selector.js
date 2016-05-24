import classNames from 'classnames';

function Selector (props){
  const { type , count } = props;
  if (!type) {
    return null;
  }
  const css = classNames({
    ['remind-'+ type ]: type
  });
  return (
    <span
      className={ css }
    >
      { count }
    </span>
  );
}

export default Selector;
