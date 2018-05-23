
function PaginateComponent({
  nextPage,
  previousPage
}) {
  return (
    <div>
      <a href="#" onClick={ () => nextPage() }>Previous</a>
      ....
      <a href="#" onClick={ () => previousPage() }>Next</a>
    </div>
  )
}

export default PaginateComponent



