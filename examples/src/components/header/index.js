import React from 'react';

function ComponentTitle(props){
  const { title } = props;
  return (
    <div className="container">
      <div className="title">
        <h1 className="page_title">
          { title }
        </h1>
      </div>
    </div>
  );
}

export default ComponentTitle;
