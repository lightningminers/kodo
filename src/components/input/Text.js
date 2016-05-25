import classNames from 'classnames';

function Text (props){
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
      </div>
      <icon
        {...featrueMethods}
        className="icon-v-right"
      >

      </icon>
    </div>
  );
}

export default Text;
