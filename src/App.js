import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  eventsMenu(x) {
    return (
      <div key={x.label}>
        <a href={x.link} target="foo">{x.label}</a>
      </div>
    );
  }

  externalLink(link) {
    const {store} = this.props;
    store.dispatch({type:'NEW_EXTERNAL_FRAME', value: link});
    console.log('App.js. externalLink. link: ', link);
  }

  render() {
    const {store} = this.props;
    let state = store.getState();
    console.log('App.js. render(). state:', state);

    return (
      <div className="App">
        <div className="heading">What's Playing Where</div>
        <div className="main">
          <div className="menu">
            {state.bands.map(x => this.eventsMenu(x))}
          </div>
          <div className="externalFrame">
            externalFrame
          </div>
        </div>
      </div>
    );
  }
}

export default App;
