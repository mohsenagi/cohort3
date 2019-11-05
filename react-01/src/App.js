import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyComp, EvenComp, OddComp} from './components/MyComponent';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
        myState: "TBD",
        counter: 2,
      };
    }
  onPushMe = () => {
    this.setState(state => ({
      counter: state.counter+1
    }));
  }
  render () {
    let message;
    if (this.state.counter%2 === 0) {
      message = <EvenComp />
    } else {
      message = <OddComp />
    }
    return (
      <div className="App">
      <header className="App-header">
        <MyComp whatToSay="What Ever" func={this.onPushMe}/>
        {message}
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I am in control of this application and my name is Mason{this.state.counter}</h1>
        <button onClick={this.onPushMe}>Push Me</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      </div>
    );
  }
}

export default App;
