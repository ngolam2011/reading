import React from 'react';

export default (props) => {
  const { snippet, multimedia, pub_date, source } = props;
  return (
    <div>
      <h4>{ snippet }</h4>
      <p>{ multimedia }</p>
      <p>{ pub_date }</p>
      <p>{ source }</p>
    </div>
  );
}
