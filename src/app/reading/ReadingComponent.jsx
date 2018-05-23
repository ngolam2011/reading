import React, { Component } from 'react'
import Article from './Article'
import Paginate from './Paginate'
import { connect } from 'react-redux'
import { fetchArticles } from '../../src/actions'

function ReadingComponent({ articleDetail }) {
  return (
    <div>
      <p>{ articleDetail.snippet }</p>
    </div>
  )
}


