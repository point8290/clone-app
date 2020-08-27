import React, { Component } from "react";


class Addtask extends Component {
  state = {
    task: null,   
  };

  TaskEntry = (e) => {
    this.setState({
      task: e.target.value
    })
  }
  
  addTask = (e) => {
    e.preventDefault();
    this.props.AddTask(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit= {this.addTask}>
          <input className="input" type="text" placeholder ="Let's do this" onChange={this.TaskEntry} />
          <button className="btn"> Add </button>
        </form>
      </div>
    );
  }
}

export default Addtask;
