import React, { Component } from 'react';
import Api from '../lib/todos-service';

export default class List extends Component {

  state = {
    todos: [],
    loading: true,
  }

  componentDidMount() {
    this.getTodos();
  }
  componentDidUpdate() {
    this.props.refresh && this.renderTodos()
    console.log(this.props.refresh)
  }

  getTodos = () => {
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
    return this.state.todos.map((todo)=>{
      console.log(todo)
      return (  
        <li key={todo._id}>
          {todo.title} - {todo.body}
          <button onClick={()=>{this.removeTodo(todo._id)}}>remove</button>
        </li>
      )
    })
  }

  removeTodo = (id) => {
    Api.deleteTodo(id)
    .then(()=> {
      this.getTodos()
    })
    .catch((error) => console.log(error))

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
