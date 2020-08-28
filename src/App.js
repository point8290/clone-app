import React, { Component } from 'react';
import Data from './Data';
import Card from "./Card";
import Addtask from "./Addtask";
import { DragDropContext } from "react-beautiful-dnd";
class App extends Component {
  state = Data;
  AddTask = (todo) => {
    if (todo != null) {
      const id = Math.random().toString(36).substring(7);
      todo.id = id;
      console.log(todo);
      const card = this.state.cards["card-1"];
      const T = this.state.Todo;
      T[id] = todo;
      card.tasks.push(id);
      const newState = { ...this.state, Todo: T, card: card }; 
      this.setState(newState);    
    }
  }
  DeleteTask = (id, index) => {
    const cards = this.props.cards
    const card= this.state.cards[id]
    card.tasks.splice(index, 1)
    const newState = { ...cards, [id]: card };
    this.setState(newState);
    
  };

  onDragEnd = (result) => {
    // console.log(result);

    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const Startcard = this.state.cards[source.droppableId];
    const Finishcard = this.state.cards[destination.droppableId];

    if (Startcard === Finishcard) {
      const newTaskIds = Array.from(Startcard.tasks);

      newTaskIds.splice(source.index, 1);

      newTaskIds.splice(destination.index, 0, draggableId);

      const newCard = { ...Startcard, tasks: newTaskIds };

      const newState = {
        ...this.state,
        cards: {
          ...this.state.cards,
          [newCard.id]: newCard,
        },
      };
      // console.log(newState);
      this.setState(newState);
    } else {
      const startTaskIds = Array.from(Startcard.tasks);
      startTaskIds.splice(source.index, 1);
      const newStart = {
        ...Startcard,
        tasks: startTaskIds,
      };
      const finishTaskIds = Array.from(Finishcard.tasks);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...Finishcard,
        tasks: finishTaskIds,
      };
      const newState = {
        ...this.state,
        cards: {
          ...this.state.cards,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish,
        },
      };
      this.setState(newState);
    }
  };
  render() {
    return (
      <div>
        <div className="name">Trello - Clone</div>
        <div className="main-container">
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.state.cardOrder.map((cardID) => {
              const card = this.state.cards[cardID];
              const todo = card.tasks.map((taskID) => this.state.Todo[taskID]);
              return (
                <Card
                  key={card.id}
                  DeleteTask={this.DeleteTask}
                  card={card}
                  tasks={todo}
                />
              );
            })}
          </DragDropContext>
        </div>
        <div>
          <Addtask AddTask= {this.AddTask}/>
        </div>
      </div>
    );
  }
}


export default App;
