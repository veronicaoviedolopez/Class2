import React, { Component } from 'react';
import CounterStatus from './Components/CounterStatus/CounterStatus';
import Button from './Components/Button/Button';

class App extends Component {
  constructor(){
    super();
    this.state= {
      count:0,
    }
  }
    handleClick(event){
      console.log(event.target.innerText);
      this.setState(
        {count: event.target.innerText=== "+" ? this.state.count +1 : this.state.count - 1 }
      )
    }

  render() {
    return (
      <div className="App">
          <Button text="+" click = {this.handleClick.bind(this)}/>
          <CounterStatus count={this.state.count}/>
          <Button text="-" click = {this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
