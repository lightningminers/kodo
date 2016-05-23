import classNames from 'classnames';

function Tags (props){
  const { tags } = props;
  console.log(tags);
  if (!tags.length || !tags) {
    return null;
  }
  return tags.map((action, idx)=>{
    const { active, text, methods} = action;
    const css = classNames({
      'tt-option': true,
      'active': active
    });
    return (
      <span
        {...methods}
        key={ idx }
        className={ css }
      >
        { text }
      </span>
    );
  });
}

export default Tags;
