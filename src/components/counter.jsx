import React, { Component } from 'react';

class Counter extends Component {

   render() {
      return (
         <div className="ml-4">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button
               onClick={() => this.props.onIncrement(this.props.counter)}
               className="btn btn-info btn-sm m-2">
               Increment
            </button>
            
            <button
               onClick={() => this.props.onDecrement(this.props.counter)}
               className="btn btn-info btn-sm m-2">
               Decrement
            </button>

            <button
               onClick={() => this.props.onDelete(this.props.counter.id)}
               className="btn btn-danger btn-sm m-2">
               Dalete
            </button>

         </div>
      )
   }

   getBadgeClasses() {
      let classes = "badge m-2 badge-";
      classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
      return classes;
   }

   formatCount() {
      let { value: count } = this.props.counter
      if (count === 0) return "Zero"
      return count;
   }
}

export default Counter;