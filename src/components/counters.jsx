import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

   state = {
      counters: [
         { id: 1, value: 2 },
         { id: 2, value: 0 },
         { id: 3, value: 0 },
         { id: 4, value: 3 },
         { id: 5, value: 1 }
      ]
   }

   handleDelete = (id) => {
      const counters = this.state.counters
      let filterd = counters.filter(item => item.id !== id);
      this.setState({ counters: filterd })
   }

   handelIncrement = (counter) => {
      let counters = [...this.state.counters];
      let index = counters.indexOf(counter);
      counters[index].value++;
      this.setState({ counters })
   }

   handleDecrement = (counter) => {
      let counters = [...this.state.counters];
      let index = counters.indexOf(counter);

      counters[index].value--;
      this.setState({ counters })
   }

   handleReset = () => {
      let counters = [...this.state.counters];
      counters.map(item => item.value = 0)
      this.setState({ counters })
   }

   render() {
      return (
         <>
            <button className="btn btn-info btn-sm m-3" onClick={() => {
               this.handleReset()
            }}>Reset</button>
            {this.state.counters.map(item => {
               return (
                  <Counter
                     key={item.id}
                     onDelete={(id) => this.handleDelete(id)}
                     counter={item}
                     onIncrement={this.handelIncrement}
                     onDecrement={this.handleDecrement}
                  />
               )
            })}
         </>
      )
   }
}

export default Counters;