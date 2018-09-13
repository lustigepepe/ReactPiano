import React from 'react';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import logo from './logo.svg';
import './PianoApp.css';


function Square(props) {
  return (
    // <button className="square" onClick={props.onClick}>
    
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}
class KeyBoard extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      squares: Array(12).fill(null),
      className: "square"
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({
      squares: squares});
  }

  drawKey(i) {
    if(i %2 === 0) {
      if(i <= 4)
        return "thinSquare";
      if(i >= 8)
        return "square";

    }
    if(i %2 !== 0) {
      if(i >= 7) {
        return "thinSquare";
      }
      if(i <= 5)
        return "square";
    }
    return "square";
  }

  renderKey(i) {
   return (
         <Square
          className = {this.drawKey(i)}
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
      />
    );
  }
 
  render() {
    var rows = [];
    for(let i = 1; i < 13; ++i)
      rows.push(this.renderKey(i));
    return (
      <div className="board-row">
        {rows}
      </div>
    );
  }
}

class PianoApp extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   keys: Array(12).fill("0"),
    //   key: 0,
    // };
  }

  // handleClick(i) {
  //   const keys = this.state.keys;
  //   const currentKey = keys[this.state.key];
  //   this.setState({
  //     keys: keys,
  //     key: key
  //   });
  // }

  render() {
    // const keys = this.state.keys;
    // const currentKey = keys[this.state.key];

    return (
      <div className="App-KeyBoard">
        <KeyBoard />
      </div>
    );
  }
}

export default PianoApp;
