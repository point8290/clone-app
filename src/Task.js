import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';
export default class Task extends Component {
    render() {
        return (
          <Draggable draggableId={this.props.task.id} index={this.props.index}>
            {(provided, snapshot) => (
              <div
                className="task"
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              
                >
                {this.props.task.task}
              </div>
            )}
          </Draggable>
        );

    }
}
