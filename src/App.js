import React, { Component } from 'react';
import './App.css';
import ItemsList from './components/ItemsList/ItemsList';

class App extends Component {
  state = {
    currentValue: '',
    items: [],
    done: []
  }

  handleChange = (event) => {
    this.setState({
      currentValue: event.target.value
    });
  }

  addItem = () => {
    if (this.state.currentValue.length === 0) {
      alert('You can not enter an empty task');
    } else {
      const arr = [...this.state.items];
      const newArr = [...arr, this.state.currentValue];
      const doneArr = [...this.state.done];
      const newDone = [...doneArr, false];
      this.setState({
        items: newArr,
        done: newDone,
        currentValue: ''
      });
    }
  }

  deleteItem = (index) => {
    let newItems = [], newDone = [];
    for (let i = 0; i < this.state.items.length; i++) {
      if (i !== index)
        newItems.push(this.state.items[i]);
    }
    for (let i = 0; i < this.state.done.length; i++) {
      if (i !== index)
        newDone.push(this.state.done[i]);
    }
    this.setState({
      items: newItems,
      done: newDone
    });
  }

  deleteItems = () => {
    this.setState({
      items: [],
      done: []
    });
  }

  doneItem = (index) => {
    let doneItems = [...this.state.done];
    doneItems[index] = !doneItems[index];
    this.setState({
      done: doneItems
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="MainForm">
          <div>
            <input className="Input" placeholder="Enter a task" type="text" onChange={this.handleChange} value={this.state.currentValue}/>
          </div>
          <div className="FormButtons">
            <button onClick={this.addItem} className="FirstButton">
              Add a task
            </button>
            <button onClick={this.deleteItems}>
              Delete all tasks
            </button>
          </div>
        </div>
        <ItemsList 
          items={this.state.items}
          deleteItem={this.deleteItem}
          doneItem={this.doneItem}
          doneItems={this.state.done}
        />
      </div>
    );
  }
}

export default App;
