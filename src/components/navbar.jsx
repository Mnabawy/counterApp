import React, { Component } from 'react';

class NavBar extends Component {


   render() {
      return (
         <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">Navbar</a>
               <p className="badge badge-warning">{this.props.totalNumber}</p>
            </div>
         </nav>
      );
   }
}

export default NavBar;