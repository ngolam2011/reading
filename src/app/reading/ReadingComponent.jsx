import React from 'react'

function ReadingComponent({ articleDetail }) {
  return (
    <div>
      <p>{ articleDetail.snippet }</p>
    </div>
  )
}


export default ReadingComponent
