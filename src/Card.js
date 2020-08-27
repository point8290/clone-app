import React, { Component } from 'react'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

export default class Card extends Component {


    render() {
        return (
          <div className="cards">
            <div className="title">{this.props.card.title}</div>
            <Droppable droppableId={this.props.card.id}>
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {this.props.tasks.map((task, index) => (
                    <div>
                      <Task key={task.id} task={task} index={index} />
                      <button className="btn" key={task.id + index } onClick={()=>{this.props.DeleteTask(this.props.card.id,index)
                      }}>
                        Delete
                      </button>
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        );
    }
}
