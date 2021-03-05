import React, { Component } from 'react';
import Counter from './counter';

// StateLess Component

const Counters = ({ onReset, onDelete, onDecrement, onIncrement, counters,active }) => {
   return (
      <>
         <button className="btn btn-info btn-sm m-3" onClick={onReset}>Reset</button>
         {counters.map(item => {
            return (
               <Counter
                  key={item.id}
                  onDelete={onDelete}
                  counter={item}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  active={active}
               />
            )
         })}
      </>
   )
}

export default Counters;