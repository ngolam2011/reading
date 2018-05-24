import React from 'react';

function ArticleComponent(props) {
  const { snippet, multimedia, pub_date, source, _id } = props;
  return (
    <div onClick={ () => props.redirectToReading(_id, props.history) }>
      <h4>{ snippet }</h4>
      <p>{ pub_date }</p>
      <p>{ source }</p>
    </div>
  );
}

export default ArticleComponent
