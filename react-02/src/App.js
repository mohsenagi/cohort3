import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello, Icon} from './components/MyComponents.js'
import {Game} from './components/TicTacToe.js'
import { CityandCommunity } from './components/Community.js'
import { LinkedListDisplay } from './components/LinkedListComponent.js'
import Handshake from './components/Handshake.jpg'
import TicTacToe from './components/tic tac toe.jpg'
import City from './components/City.jpg'
import LinkedList from './components/LinkedList.jpg'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedIcon: "LinkedList",
    };
  }
  onClickfunc = (name) => {
    if (name) {
      this.setState({
        clickedIcon: name,
      });
    }
  }
  render () {
    return (
      <div className="Menue">
        <Hello />
        <div onClick = {(e) => this.onClickfunc(e.target.alt)} className="IconsContainer">
          <Icon ClassName= "Icons" Url={Handshake} Name="Handshake"/>
          <Icon ClassName= "Icons" Url={TicTacToe} Name="tic tac toe"/>
          <Icon ClassName= "CityIcon" Url={City} Name="City and Community"/>
          <Icon ClassName= "CityIcon" Url={LinkedList} Name="LinkedList"/>
        </div>
        <div className="App-header">
          { this.state.clickedIcon === "Handshake" &&
          <div>
            <h3>{this.state.clickedIcon}</h3>
            <div className = "game">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          }
          { this.state.clickedIcon === "tic tac toe" &&
            <div>
              <h3>Tic Tac Toe</h3>
              <Game />
            </div>
          }
          { this.state.clickedIcon === "City and Community" &&
          <div>
            <h3>Your Community</h3>
            <CityandCommunity />
          </div>
          }
          { this.state.clickedIcon === "LinkedList" &&
          <div>
            <h3>Linked List</h3>
            <LinkedListDisplay />
          </div>
          }
        </div>
      </div>
    );
  }
}

export default App;
