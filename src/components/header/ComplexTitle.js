import classNames from 'classnames';

function ComplexTitle (props){
  const { complex } = props;
  if (!complex && !complex.length) {
    return null;
  }
  return complex.map((action, idx)=>{
    const { type, text } = action;
    const css = classNames({
      'tt-l': type === 'big',
      'tt-s': type === 'small'
    });
    return (
      <span
        key={ idx }
        className={ css }
      >
        { text }
      </span>
    );
  });
}

export default ComplexTitle;
