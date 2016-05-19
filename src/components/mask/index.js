import classNames from 'classnames';

function Mask(props){
  const { type } = props;
  const css = classNames({
    'overlay active': true,
    ['overlay-'+ type]: !!type
  });
  return (
    <div className={ css }></div>
  );
}

export default Mask;
