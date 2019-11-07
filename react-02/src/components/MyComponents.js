import React from 'react';
import './MyComponents.css';

class Hello extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        );
    }
}

class Icon extends React.Component {
    render () {
        return (
            <div>
                <img src={this.props.Url} className="Icons" alt={this.props.Name} />
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let itm of lines) {
        let [a,b,c] = itm;
        if (squares[a] != null && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (squares.filter(itm => itm === null).length === 0) {
        return "Tie"
    }
    return null;
}

function Square(props) {
    return (
    <button className="square" onClick={props.onClick}>
        {props.value}
    </button>
    );
}
  
  class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square
            value = {this.props.squares[i]}
            onClick = {() => this.props.onClick(i)}
        />
      );
    }
  
    render() {
    
        return (
            <div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
            </div>
        );
    }
  }
  
  class Game extends React.Component {
    constructor() {
        super()
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            winner: null,
        }
    }

    handleClick(i) {
        let history = this.state.history;
        let current = history[this.state.stepNumber]
        const squares = current.squares.slice();
        if (squares[i] || this.state.winner) {
            return;
        }
        this.state.xIsNext ? squares[i] = 'X' : squares[i] = 'O'
        let winner = calculateWinner(squares);
        history.push({squares: squares})
        this.setState(state => ({
            history: history,
            stepNumber: history.length-1,
            xIsNext: (state.stepNumber+1)%2 === 0,
            winner: winner,
        }));
    }

    jumpTo(idx) {
        let history = this.state.history;
        let current = history[idx];
        const squares = current.squares.slice();
        let winner = calculateWinner(squares);
        this.setState({
            stepNumber: idx,
            xIsNext: idx%2 === 0,
            winner: winner,
        });
    }


    render() {
        let history = this.state.history;
        let current = history[this.state.stepNumber]
        const squares = current.squares.slice();
        let status;
        if (this.state.xIsNext) {
            status = 'Next player: X';         
        }
        if (!this.state.xIsNext) {
            status = 'Next player: O';
        }
        if (this.state.winner != null) {
            status = `Winner: ${this.state.winner}`
        }
        if (this.state.winner === "Tie") {
            status = `That was just a tie`
        }

        let movesList = history.map((itm,idx) => {
            const desc = idx ?
            'Go to move #' + idx :
            'Go to game start';
            return (
            <li key = {idx}>
            <button onClick={() => this.jumpTo(idx)}>{desc}</button>
            </li>
            );
        });

        return (
        <div className="game">
          <div className="game-board">
            <Board squares = {squares} onClick = {(i) => this.handleClick(i)} />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>
                {movesList}
            </ol>
          </div>
        </div>
      );
    }
  }

export {Hello, Icon, Game}