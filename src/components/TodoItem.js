import React, { Component } from 'react'
import trash from './trash.png';

export class TodoItem extends Component {
  getStyle = ()=>{
    const {todo} = this.props;
    const pri = todo.priority;
    
    let color= pri==="high" ? "#F85967" : (pri==="normal" ? "#FEDA6A" : "#55ff77")
    let decor = todo.completed ? 'line-through' : 'none'
    
    return{
        textDecoration: decor,
        backgroundColor: color
    }
}
  
  render() {
    const {todo} = this.props;
    const {id} = todo;
    return (
      <div style={{...this.getStyle(), ...itemStyle}}> 
          <input
          type="checkbox"
          onChange={this.props.toggleComplete.bind(this, id)}/>
          
          <p style={{flex: 10}}>{todo.title}</p>
          
          <input
          type="image"
          src={trash}
          alt= "X"
          onClick={this.props.delTodo.bind(this, id)}/>
      </div>
    )
  }
}

const itemStyle = {
  color: "#262626",
  margin: "15px 50px 15px 50px",
  padding: "10px",
  textAlign: "center",
  display: "flex",
  justifyContent:"center",
  alignItems:"center"
}


export default TodoItem