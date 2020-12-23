import React, {Component} from 'react'

class Colors extends Component {
  
  selected = this.props.priority;

  highlight = (event)=>{
    event.preventDefault();
    this.selected = event.target.id;
    this.props.colourPicker(this.selected);
  }

  render(){
    return (
      <div id="colors">
      
        <button
        id="high"
        style={{backgroundColor: "#F85967", ...buttonStyle}}
        onClick={this.highlight}>
        { (this.selected==="high")? "X": ""}
        </button>

        <button
        id="normal"
        style={{backgroundColor: "#feda6a", ...buttonStyle}}
        onClick={this.highlight}>
        { (this.selected==="normal")? "X": ""}
        </button>

        <button
        id="low"
        style={{backgroundColor: "#55ff77", ...buttonStyle}}
        onClick={this.highlight}>
        { (this.selected==="low")? "X": ""}
        </button>

      </div>
    )
  }
}

const buttonStyle = {
  height: "3.5em",
  width: "3.5em",
  border:"none",
  cursor: "pointer",
  margin: "5px 5px",
}

export default Colors;