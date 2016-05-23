import classNames from 'classnames';

function Tags (props){
  const { tasg } = props;
  if (!tags.length || tags) {
    return null;
  }
  return tasg.map((action, idx)=>{
    const { active, tag} = action;
    const css = classNames({
      'tt-option': true,
      'active': active
    });
    return (
      <span
        {...action}
        key={ idx }
        className={ css }
      >
        { tag }
      </span>
    );
  });
}

export default Tags;
