import classNames from 'classnames';

function Normal (props){
  const css = classNames({
    'form-item': true
  });
  const {value, label, featrueMethods, placeholder } = props;
  const fieldCss = classNames({
    'field-vale': true,
    placeholder: placeholder
  });
  return (
    <div
      className={ css }
    >
      <label className="item-label">{ label }</label>
      <div className="item-field">
        <p
          className={ fieldCss }
        >
          { value }
        </p>
      </div>
      <icon
        {...featrueMethods}
        className="icon-v-right"
      >

      </icon>
    </div>
  );
}

export default Normal;
