import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,

  }
  render() {
    const { counter } = this.state;

    return <div>{counter}</div>;
  }
  add = () => {
    this.setState(prev => {
      return {
        coutner: prev.counter++;
      }
    })
  }
}

export default App;
