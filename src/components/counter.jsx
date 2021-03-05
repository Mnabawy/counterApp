import React, { Component } from 'react';

class Counter extends Component {

   render() {
      const { counter, onIncrement, onDecrement, onDelete } = this.props
      return (
         <div className="container w-50">

            <div className="row">
              
               <div className="col-3">
                  <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
               </div>

               <div className="col-3">
                  <button
                     onClick={() => onIncrement(counter)}
                     className="btn btn-info btn-sm m-2">
                     <i className="bi bi-file-plus" >+</i>
                  </button>
               </div>

               <div className="col-3">
                  <button
                     onClick={() => onDecrement(counter)}
                     disabled={(this.props.counter.value > 0) ? false : true}
                     className="btn btn-info btn-sm m-2">
                     <i className="bi bi-file-minus">-</i>
                  </button>
               </div>

               <div className="col-3">
                  <button
                     onClick={() => onDelete(counter.id)}
                     className="btn btn-danger btn-sm m-2">
                     Dalete
                  </button>
               </div>

            </div>
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
