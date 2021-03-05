import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import React, { Component } from 'react';
import Counters from './components/counters';



class App extends Component {

  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 3 },
      { id: 5, value: 1 }
    ]
  }

  handelIncrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter }
    counters[index].value++;
    this.setState({ counters })
  }

  handleDecrement = (counter) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index] = { ...counter }
    if(counter.value >0 ||counter.value >0 ){
      counters[index].value--;
    }
    this.setState({ counters })
  }

  handleReset = () => {
    let counters = [...this.state.counters];
    counters.map(item => item.value = 0)
    this.setState({ counters })
  }

  handleDelete = (id) => {
    const counters = this.state.counters
    let filterd = counters.filter(item => item.id !== id);
    this.setState({ counters: filterd })
  }

  render() {
    return (
      <div className="App">
        <NavBar totalNumber={this.state.counters.filter(item => item.value > 0).length } />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handelIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}

export default App;
