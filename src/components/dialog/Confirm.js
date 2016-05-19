import renderButtons from './buttons';
import NoTitle from './NoTitle';
import ExistTitle from './ExistTitle';

function Confirm (props){
  const { title, children, buttons, show} = props;
  const ContentNode = title ? ExistTitle : NoTitle
  return (
    <div className="dialog" style={{display:show ? 'block' : 'none'}}>
      <ContentNode title={ title } children={ children }/>
      <footer className="dialog-ft">
        { renderButtons(buttons)}
      </footer>
    </div>
  );
}

export default Confirm;
