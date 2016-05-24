import classNames from 'classnames';

function Svg (props){
  const { svg } = props;
  console.log(props);
  if (!svg) {
    return null;
  }
  const css = classNames({
    'item-icon icon-svg': true,
    ['icon-'+ svg ]: !!svg
  });
  const href = 'images/icons.svg#icon-' + svg;
  return (
    <svg
      className={ css }
    >
      <use href={ href }></use>
    </svg>
  );
}
export default Svg;
