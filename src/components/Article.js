import React from 'react';

export default (props) => {
  const { snippet, multimedia, pub_date, source } = props;
  return (
    <div onClick={ (e) => props.onClickHandle(e, props._id) }>
      <h4>{ snippet }</h4>
      <p>{ pub_date }</p>
      <p>{ source }</p>
    </div>
  );
}
