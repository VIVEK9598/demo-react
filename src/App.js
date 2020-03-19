import React, { Component } from "react";

class App extends Component {
  
  render() {
    const {onIncrement,onDecrement,onDelete,counter}=this.props

    const formatCount = this.props.counter.value === 0 ? "Zero" : this.props.counter.value


    return (
      <div>

        <button className="btn btn-secondary m-2 btn-sm" onClick={()=>onDecrement(counter)}>Decrement</button>

        <span className={this.getBadgeClasses()}>{formatCount} </span>
        <button className="btn btn-secondary m-2 btn-sm" onClick={()=>onIncrement(counter)}>Increment</button>

        <button className="btn btn-danger m-2 btn-sm" onClick={()=>onDelete(counter.id)}>Delete</button>


      </div >
    )
  }


  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.props.counter.value=== 0 ? "warning" : "primary";
    return classes;
  }
}
export default App;