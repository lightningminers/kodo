import classNames from 'classnames';

function Clear (props){
  const css = classNames({
    'form-item': true
  });
  const { type, value, methods, label, mutable, featrueMethods } = props;
  const MUTABLE = <input type={ type } defaultValue={ value } className="f-text"/>;
  const NOMUTABLE = <input {...methods} type={ type } value={ value } className="f-text"/>;
  const Inputs = mutable ? MUTABLE : NOMUTABLE;
  return (
    <div
      className={ css }
    >
      <label className="item-label">{ label }</label>
      <div className="item-field">
          { Inputs }
          <span
            {...featrueMethods}
            className="icon-input-clear"
          >
            <i className="icon-cross"></i>
          </span>
      </div>
    </div>
  );
}

export default Clear;
