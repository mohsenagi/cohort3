import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Icon, Game} from './components/MyComponents.js'
import Handshake from './components/Handshake.jpg'
import TicTacToe from './components/tic tac toe.jpg'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedIcon: "tic tac toe",
    };
  }
  onClickfunc = (name) => {
    this.setState({
      clickedIcon: name,
    });
  }
  render () {
    return (
      <div className="App">
      <header className="App-header">
        <Hello />
        <div onClick = {(e) => this.onClickfunc(e.target.alt)} className="IconsContainer">
          <Icon Url={Handshake} Name="Handshake"/>
          <Icon Url={TicTacToe} Name="tic tac toe"/>
        </div>
        { this.state.clickedIcon === "Handshake" &&
          <h3>{this.state.clickedIcon}</h3>
        }
        { this.state.clickedIcon === "tic tac toe" &&
          <Game />
        }
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      </div>
    );
  }
}

export default App;
