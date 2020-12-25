import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

class TodoList extends Component {
  state = {
    lastID : 3,
    todos: [
      {
        id: 1,
        title: "Code something",
        priority: 'high',
        completed : false
      },
      {
        id: 2,
        title: "Learn react",
        priority: 'normal',
        completed : false
      },
    ]
  }
  
  addTodo = (todo) =>{
    const newTodo = {
      ...todo,
      id: this.state.lastID + 1,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo], lastID: this.state.lastID+1})
  }
  
  toggleComplete = (id) => {
    let state = this.state;
    state.todos = state.todos.map(todo=>{
      if(todo.id === id) todo.completed = !todo.completed
      return todo;
    })
    this.setState(state);
  }
  
  delTodo = (id) => {
    let {todos, lastID} = this.state;
    todos = todos.filter(todo =>todo.id !== id);
    this.setState({lastID, todos});
  }

  render() {

    return (
      <div>
      
        { this.state.todos.map( todo =>
          <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={this.toggleComplete}
          delTodo={this.delTodo}>
          </TodoItem>
        ) }

        <AddTodo addTodo={this.addTodo}/>
      
      </div>
    )
  }
}

export default TodoList;
