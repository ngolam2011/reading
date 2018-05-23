import React, { Component } from 'react'
import { BrowserRouter, Route }  from 'react-router-dom'
import './App.css'
import Dashboard from './Dashboard'
import ArticleDetail from './ArticleDetail'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Dashboard } />
          <Route path="/detail" component={ ArticleDetail } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

