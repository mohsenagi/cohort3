import React from 'react';
import './App.css';

import {Hello, Icon} from './components/MyComponents.js'
import {Game} from './components/TicTacToe.js'
import { CityandCommunity } from './components/Community.js'
import { LinkedListDisplay } from './components/LinkedListComponent.js'
import {Setting} from './components/Setting.js'

import {ThemeProvider} from './components/Contexts.js'
import {ThemeContext} from './components/Contexts.js'

import logo from './components/Icons/logo.svg';
import Handshake from './components/Icons/Handshake.jpg'
import TicTacToe from './components/Icons/tic tac toe.jpg'
import City from './components/Icons/City.jpg'
import LinkedList from './components/Icons/LinkedList.jpg'
import Settings from './components/Icons/Settings.png'

class AppHeader extends React.Component{
  static contextType = ThemeContext;
  render () {
    return (
      <div className={this.context.fontColor === "White" ? "App-header-White" : "App-header-Red"}>
      { this.props.clickedIcon === "Handshake" &&
      <div>
        <h3>{this.props.clickedIcon}</h3>
        <div className = "game">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      }
      { this.props.clickedIcon === "tic tac toe" &&
        <div>
          <h3>Tic Tac Toe</h3>
          <Game />
        </div>
      }
      { this.props.clickedIcon === "City and Community" &&
      <div>
        <h3>Your Community</h3>
        <CityandCommunity />
      </div>
      }
      { this.props.clickedIcon === "LinkedList" &&
      <div>
        <h3>Linked List</h3>
        <LinkedListDisplay />
      </div>
      }
      { this.props.clickedIcon === "Settings" &&
      <div>
        <h3>Settings</h3>
        <Setting />
      </div>
      }
    </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedIcon: "Settings",
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
      <ThemeProvider>
        <div className="Menue">
          <Hello />
          <div onClick = {(e) => this.onClickfunc(e.target.alt)} className="IconsContainer">
            <Icon ClassName= "Icons" Url={Handshake} Name="Handshake"/>
            <Icon ClassName= "Icons" Url={TicTacToe} Name="tic tac toe"/>
            <Icon ClassName= "CityIcon" Url={City} Name="City and Community"/>
            <Icon ClassName= "CityIcon" Url={LinkedList} Name="LinkedList"/>
            <Icon ClassName= "Icons" Url={Settings} Name="Settings"/>
          </div>
          <AppHeader clickedIcon ={this.state.clickedIcon} />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
