import React, { Component } from 'react';
import './App.css';
import PlayerOne from "./PlayerOne";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
    };
    this.updatethiscounter = this.updatethiscounter.bind(this);

  }
  //this will update the counter value by +1 and sets the state for that current value
  updatethiscounter(){
    this.setState(({counter: this.state.counter+1}));
  }

  render() {
    return (
<div>

  <span>{this.state.counter}</span>

  {/*the PlayerOne function is called but pulls the updatethiscounter function as a property*/}
  <PlayerOne updatethiscounter={this.updatethiscounter}/>
</div>


    );
  }
}

export default App;
