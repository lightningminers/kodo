import classNames from 'classnames';

function Mask(props){
  const { type } = props;
  const css = classNames({
    kodo_mask_transparent: true,
    ['kodo_mask_'+ type]: !!type
  });
  return (
    <div className={ css }></div>
  );
}

export default Mask;
