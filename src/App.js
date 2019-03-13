import React, { Component } from 'react';
import List from './Components/List'
import CreateTodo from './Components/CreateTodo'
import './App.css';

class App extends Component {
  state = {
    refresh: false,
  }

  refresh = () => {
    this.setState({
      refresh: true,
    })
    console.log('refresher called from createtodo')
  }



  render() {
    return (
      <div>
        <CreateTodo refresher={this.refresh}/>
        <List refresh={this.state.refresh}/>
      </div>
    );
  }
}

export default App;
