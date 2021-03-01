import React, { Component } from 'react';

class Counter extends Component {

   state = {
      count: 0,
   }

   handleIncrement = () => {
      console.log(this.state.count)
   }

   render() {
      return (
         <div className="ml-4">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement}>Increment</button>
         </div>
      )
   }


   getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += (this.state.count === 0) ? 'warning' : 'primary';
   }

   formatCount() {
      let { count } = this.state
      if (count === 0) return "Zero"
      return count;
   }
}

export default Counter;