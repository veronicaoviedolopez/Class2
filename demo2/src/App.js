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
    handleClick(sign){
      this.setState(
        {count: sign=== "+" ? this.state.count + 1 : this.state.count - 1 }
      )
    }

  render() {
    return (
      <div className="App">
          <Button text="+" click = {this.handleClick.bind(this)} sign="+"/>
          <CounterStatus count={this.state.count}/>
          <Button text="-" click = {this.handleClick.bind(this)} sign="-"/>
      </div>
    );
  }
}

export default App;
