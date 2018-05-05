import React, { Component } from 'react';
import './App.css';
import ArticleList from './ArticleList';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Reading News</h1>
      <ArticleList />
      </div>
    );
  }
}

export default App;
