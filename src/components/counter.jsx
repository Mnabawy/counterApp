import React, { Component } from 'react';

class Counter extends Component {

   state = {
      count: 0,
      tags: []
   }

   render() {
      return (
         <div className="ml-4">
            {this.state.tags.length === 0 && <p> please create a tag</p>}
            {this.rendringTagsList()}
         </div>
      )
   }

   // conditional rendring
   rendringTagsList() {
    
      const tagsList = this.state.tags.map((tag, index) => <li key={index}>{tag}</li>);
      if (this.state.tags.length === 0) return <p>there are no tags in this list</p>;
      return <ul>{tagsList}</ul>
   }
}

export default Counter;