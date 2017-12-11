import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  foo() {
    const { store } = this.props;
    var state = store.getState();
    console.log('App.js. foo. state: ', state);

    store.dispatch({type: 'WUT'});
  }

  render() {
    const {store} = this.props;
    let state = store.getState();
    console.log('App.js. render(). state:', state);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div onClick={this.foo.bind(this)}>click me</div>
      </div>
    );
  }
}

export default App;
