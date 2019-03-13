import React, { Component } from 'react';
import Api from '../lib/todos-service';

export default class CreateTodo extends Component {


  state = {
    title: "",
    body: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitTodo = (e) => {
    e.preventDefault();
    const {title, body} = this.state;

    Api.createTodo({title, body})
      .then(()=>{
        this.props.refresher()
      })
      .catch((error)=> {console.log('submitTodoError: ',error)})
  }



  render() {
    const {title, body} = this.state;
    return (
      <div className="form-row">
        <form onSubmit={this.submitTodo}>
        <div className="form-group col-md-6">
          <input type="text" placeholder="title" name="title" onChange={this.handleChange} value={title}/>
        </div>
        <div className="form-group col-md-6">
          <input type="text" placeholder="text" name="body" onChange={this.handleChange} value={body}/>
        </div>
          <input type="submit" value="Create Your Todo" className="btn btn-secondary btn-lg btn-block"/>  
        </form>
      </div>
    )
  }
}
