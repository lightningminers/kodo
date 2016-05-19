function ExistTitle ({ title, children }){
  return (
    <div className="dialog-bd">
      <h3 className="bd-tt">{ title }</h3>
      <p className="bd-txt txt--left">{ children }</p>
    </div>
  );
}

export default ExistTitle;
