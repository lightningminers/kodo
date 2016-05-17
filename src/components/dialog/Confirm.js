import renderButtons from './buttons';

function Confirm (props){
  const { title, children, buttons} = props;
  return (
    <div className="kodo_dialog">
      <div className="kodo_dialog_title">
        <strong>{title}</strong>
      </div>
      <div className="kodo_dialog_container">
        { children }
      </div>
      <div className="kodo_dialog_footer">
        { renderButtons(buttons) }
      </div>
    </div>
  );
}

export default Confirm;
