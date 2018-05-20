import React, { Component } from 'react';
import { connect } from 'react-redux'
import { selectNextPage, selectPreviousPage } from '../../src/actions'

class Paginate extends Component {
  handleClickPrevious(e) {
    e.preventDefault()
    this.props.dispatch(selectPreviousPage(this.props.currentPage - 1))
  }

  handleClickNext(e) {
    e.preventDefault()
    this.props.dispatch(selectNextPage(this.props.currentPage + 1))
  }

  render() {
    return (
      <div>
      <a href="#" onClick={ this.handleClickPrevious.bind(this) }>Previous</a>
      .......
      <a href="#"onClick={ this.handleClickNext.bind(this) }>Next</a>
      </div>
    )
  }
}

const mapStateToProps = ({ currentPage }) => {
  return {
    currentPage
  }
}

export default connect(mapStateToProps)(Paginate)

