import React, { Component } from 'react';
import List from './Components/List'
import CreateTodo from './Components/CreateTodo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <CreateTodo/>
        <List/>
      </div>
    );
  }
}

export default App;
