import React, { Component } from 'react';
import Api from '../lib/todos-service';

export default class List extends Component {

  state = {
    todos: [],
    loading: true,
    doneTodos: [],
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

  removeTodo = (id) => {
    Api.deleteTodo(id)
    .then(()=> {
      this.getTodos()
    })
    .catch((error) => console.log(error))
  }

  markDone = (todo) => {
    this.setState((currentState) => {
      return {
        todos: currentState.todos.filter((currentTodo) => currentTodo._id !== todo._id),
        doneTodos: currentState.doneTodos.concat([todo])
      }
    })
  }

  reactivateTodo = (todo) => {
    this.setState((currentState) => {
      return {
        doneTodos: currentState.doneTodos.filter((currentTodo) => currentTodo._id !== todo._id),
        todos: currentState.todos.concat([todo])
      }
    })
  } 
  
  renderTodos = () => {
    return this.state.todos.map((todo)=>{
      return (  
            <li key={todo._id}>
              {todo.title} - {todo.body}
              <button onClick={()=>{this.markDone(todo)}}>Done</button>
              <button onClick={()=>{this.removeTodo(todo._id)}}>remove</button>
            </li>
      )
    })
  }

  renderDoneTodos = () => {
    return this.state.doneTodos.map ((todo) => {
      return (
            <li key={todo._id}>
              {todo.title} - {todo.body}
              <button onClick={()=>{this.reactivateTodo(todo)}}>Reactivate</button>
            </li>
      )
    })
  }




  render() {
    return (
      <div>
        <h1>Todo list</h1>
          <h3>active todos</h3>
            {this.state.loading ? <p>Loading</p> : this.renderTodos()}
          <h3>done todos</h3>
            {this.state.loading ? <p>Loading</p> : this.renderDoneTodos()}
      </div>
    )
  }
}
