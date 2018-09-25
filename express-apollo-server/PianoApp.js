import React from 'react';
import ReactDOM from 'react-dom';
// import gql from 'graphql-tag';
import 'ignore-styles'
import logo from './logo.svg';
import './PianoApp.css';


function Square(props) {
  return (
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
    // this.state = { play: false };
    // this.url = "../../grand-piano-mp3-sounds/C1.mp3";
    // this.url = "/Users/bic_mac/Documents/JavascriptAround/react-piano-task/grand-piano-mp3-sounds/C1.mp3";
    // this.audio = new Audio(this.url);
    // this.togglePlay = this.togglePlay.bind(this);
    // var l = require('loadSounds');
    // var lf = require('../node_modules/loadFiles/loadFiles.js');
    // lf.test()
    // var loadSounds = require('./loadFiles.js');


    // console.log(loadSounds.loadSounds());

    // lf.loadSounds();
    // this.audioList = l();
  }

     // <script src="../node_modules/loadFiles/loadFiles.js"></script>

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({
      squares: squares
    });
  }
    // togglePlay() {
    // // console.log(this.audio);
    // this.setState({ 
    //   play: !this.state.play 
    // });

    
    // this.state.play ? this.audio.play() : this.audio.pause();
    // let url = "/Users/bic_mac/Documents/JavascriptAround/react-piano-task/grand-piano-mp3-sounds/C1.mp3";
    // let audio = new Audio(url);
    // this.audio.play();
    // setTimeout(()=>{ this.audio.stop(); }, 1000);


  // }

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
          onClick={() => this.handleClick(i)}/>

      // <div>
        // <button onClick={()=>this.togglePlay()}>{this.state.play ? 'Pause' : 'Play'}</button>
      // </div>
      /*<div>
        <button onClick={this.togglePlay()}>{this.state.play ? 'Pause' : 'Play'}</button>
      </div>*/
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
   state = {users: []}

  componentDidMount() {
    fetch('/data')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }

  //TODO
  // connection DB and etc.

  // handleClick(i) {
  //   const keys = this.state.keys;
  //   const currentKey = keys[this.state.key];
  //   this.setState({
  //     keys: keys,
  //     key: key
  //   });
  // }


  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    );
  }


// free me
//   render() {
//     // const keys = this.state.keys;
//     // const currentKey = keys[this.state.key];

//     return (
//       <div className="App-KeyBoard">
//         <KeyBoard />
//       </div>
//     );
//   }




} //END

// function loadSounds(octave = 1) {
//   if (octave !== 1)
//     return null; 
//   // var recursive = require('recursive-readdir-synchronous');
//   var allFiles = [];
//   let resultFiles = [];
//   let re = /.*1.*/;

//   // var fs = require('recursive-readdir-synchronous');
//   // try {
//   // allFiles = fs.readdir('../../grand-piano-mp3-sounds');
  

//   console.log(allFiles);
//   // var FileSaver = require('file-saver');



//   // } catch (err) {
//   // if (err.errno === 34) {
//   //   console.log('Path does not exist');
//   //   return null;
//   // } 

//   let count = 0,
//     pos = 0;
//   allFiles.forEach(file => {
//     let isNotEmpty = file.match(re);
//     if (isNotEmpty !== null && count < 13) {
//       resultFiles.push(isNotEmpty.input);
//       count++;
//     }
//   });

//   // the order is not sure at this state
//   resultFiles.sort();
//   let start = null;
//   for (let i = 0; i < resultFiles.length; ++i) {
//     let temp = resultFiles[i].match(/C1.*/);
//     if (temp !== null) {
//       start = temp.input;
//       break;
//     }
//   }

//   if (start !== null) {
//     var shiftItems = resultFiles.splice(resultFiles.indexOf(start));
//     // merge in th right order
//     for (let x of resultFiles)
//       shiftItems.push(x);

//     resultFiles = [];
//     let match_b;
//     // change Key with bKey
//     for (let i = 0; i < shiftItems.length; ++i) {
//       if (i + 2 < shiftItems.length) {
//         match_b = shiftItems[i + 2].match(/.*b.*/);
//         if (match_b !== null) {
//           let bKey = shiftItems.splice(i + 2, 1);
//           resultFiles.push(shiftItems[i]);
//           resultFiles.push(bKey);
//         } else
//           resultFiles.push(shiftItems[i]);
//       } else
//         resultFiles.push(shiftItems[i]);
//     }
//     shiftItems = [];
//     resultFiles.forEach(fileName => {
//       shiftItems.push('../../grand-piano-mp3-sounds/' + fileName);
//     });
//   } else
//     return null;
//   return shiftItems;
// }

// function createAudioList(octave) {
//   let audioList = loadSounds(octave);
//   for (let i = 0; i < audioList.length; ++i) {
//     audioList[i] = new Audio(audioList[i]);
//   }
//   console.log("assertion, message");
//   return audioList;
// }

export default PianoApp;
