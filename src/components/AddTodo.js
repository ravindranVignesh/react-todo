import React, { Component } from 'react'
import Colors from "./colors";

export class AddTodo extends Component {
  initialState = {
    title: '',
    priority: 'normal'
  }
  state = this.initialState;

  handleChange = (event) =>{
    const {name, value} = event.target;
    this.setState({
      ...this.state,
      [name]:value
    })
  }
  
  colourPicker = (priority)=>{
    this.setState({
      ...this.state,
      priority: priority
    })
  }

  handleSubmit = (event)=>{
    event.preventDefault();
    if(this.state.title.trim()!==""){
      this.props.addTodo(this.state);
    }
    this.setState(this.initialState);
  }


  render() {
    const {title} = this.state;
    return (
      <form>
        
        <input
        type="text"
        name="title"
        id="task-input"
        placeholder = "Add task"
        value={title}
        onChange={this.handleChange}
        />
        
        <Colors priority={this.state.priority} colourPicker={this.colourPicker}/>

        <a href="."><input
        type="button"
        id="add-btn"
        value="Add"
        onClick={this.handleSubmit}/></a>
      
      </form>
    )
  }
}


export default AddTodo
