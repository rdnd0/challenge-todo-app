import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/api',
    })
  }

  getTodos() {
    return this.api.get('/todos')
      .then(({data}) => data);
  }
  
  createTodo(body) {
    return this.api.post('/todos', body);
  }

  // getTodo(id) {
  //   return this.api.get(`/todos/${id}`);
  // }

  // editTodo(id, body) {
  //   return this.api.put(`/todos/${id}`, body);
  // }


  // deleteTodo(id) {
  //   return this.api.delete(`/todos/${id}`);
  // }
}

const api = new Api();

export default api;