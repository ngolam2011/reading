import React, { Component } from 'react'
import { BrowserRouter, Route }  from 'react-router-dom'
import HomeContainer from './home/HomeContainer'
import ReadingContainer from './reading/ReadingContainer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ HomeContainer } />
          <Route path="/reading" component={ ReadingContainer } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App

