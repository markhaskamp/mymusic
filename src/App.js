import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const { store } = this.props;
    this.unsubscribe = store.subscribe(() => this.forceUpdate());
  }

  eventsMenu(x) {
    var target = 'iframe_foo';
    if (x.frameSameOrigin !== undefined && x.frameSameOrigin) {
      target = '_blank';
    }
      
    return (
      <div className="labelDiv" key={x.label}>
        <a className="labelLink" href={x.link} target={target}>{x.label}</a>
      </div>
    );
  }

  externalLink(link) {
    const {store} = this.props;
    store.dispatch({type:'NEW_EXTERNAL_FRAME', value: link});
  }

  render() {
    const {store} = this.props;
    let state = store.getState();

    return (
      <div className="App">
        <div className="heading">What's Playing Where</div>
        <div className="main">
          <div className="menu">
            {state.bands.map(x => this.eventsMenu(x))}
            <hr />
            {state.places.map(x => this.eventsMenu(x))}
            <hr />
            {state.festivals.map(x => this.eventsMenu(x))}
          </div>
          <iframe className="externalFrame" name="iframe_foo"></iframe>
        </div>
      </div>
    );
  }
}

export default App;
