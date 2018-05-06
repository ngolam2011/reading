import React, { Component } from 'react';
import './App.css';
import ArticleList from './ArticleList';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
