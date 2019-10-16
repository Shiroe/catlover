import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>CatLover App</h1>
        <div>Count: {count}</div>
        <button onClick={() => this.setState({ count: count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: count - 1 })}>-</button>
      </div>
    );
  }
}

export default hot(module)(App);
