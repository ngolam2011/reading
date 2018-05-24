import React from 'react'

function PaginateComponent({
  nextPage,
  previousPage,
  currentPage
}) {
  return (
    <div>
      <a href="#" onClick={ (e) => nextPage(e, currentPage) }>Previous</a>
      ....
      <a href="#" onClick={ (e) => previousPage(e, currentPage) }>Next</a>
    </div>
  )
}

export default PaginateComponent



