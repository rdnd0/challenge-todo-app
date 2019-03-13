import React, { Component } from 'react';
import Api from '../lib/todos-service';

export default class List extends Component {

  state = {
    todos: [],
    loading: true,
  }

  componentDidMount() {
    Api.getTodos()
    .then((data)=>{
      this.setState({
        todos: data,
        loading: false,
      })
    })
    .catch(error => console.log(error))
  }

  renderTodos = () => {
    this.state.todos.map((todo)=>{
      return (
        <li key={todo._id}>{todo}</li>
      )
    })
  }



  render() {
    return (
      <div>
        <h1>Todo list</h1>
        {this.state.loading ? <p>Loading</p> : this.renderTodos()}    
      </div>
    )
  }
}
