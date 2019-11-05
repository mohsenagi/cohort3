import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Icon} from './components/MyComponents.js'
import Handshake from './components/Handshake.jpg'
import Spaceship from './components/Spaceship.jpg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedIcon: "",
    };
  }
  onClickfunc = (name) => {
    this.setState({
      clickedIcon: name,
    });
  }
  render () {
    let message;
    if (this.state.clickedIcon !== "") {
      message = <h3>{this.state.clickedIcon}</h3>
    }
    return (
      <div className="App">
      <header className="App-header">
        <Hello />
        <div onClick = {(e) => this.onClickfunc(e.target.alt)} className="IconsContainer">
          <Icon Url={Handshake} Name="Handshake"/>
          <Icon Url={Spaceship} Name="Spaceship"/>
        </div>
        {message}
        <img src={logo} className="App-logo" alt="logo" />
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
