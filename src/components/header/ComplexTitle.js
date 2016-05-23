import classNames from 'classnames';

function ComplexTitle (props){
  const { complex } = props;
  if (!complex && !complex.length) {
    return null;
  }
  return complex.map((action, idx)=>{
    const { type, title } = action;
    const css = classNames({
      'tt-l': type === 'big',
      'tt-s': type === 'small'
    });
    return (
      <span
        className={ css }
      >
        { title }
      </span>
    );
  });
}

export default ComplexTitle;
