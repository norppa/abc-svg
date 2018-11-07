import React, { Component } from "react";
import "./App.css";
import Stanza from "./components/Stanza";

const noteMap = {
  C: 0,
  D: 1,
  E: 2,
  F: 3,
  G: 4,
  A: 5,
  B: 6
};

const placeholder = "T:example\nK:F\nCDEc"

class App extends Component {
  state = {
      notes: []
  }

  componentDidMount = () => {
      this.setState(this.abcStringToState(placeholder))
  }

  handleChange = (event) =>  this.setState(this.abcStringToState(event.target.value));


  abcStringToState = abc => {
    const state = { abc };
    let noteStr = "";
    abc.split("\n").forEach(line => {
      const firstTwo = line.substr(0, 2);
      if (firstTwo === "T:") {
        state.title = line.substr(2).trim();
    } else if (firstTwo === "K:") {
        state.key = line.substr(2).trim();
      } else {
        noteStr += line;
      }
    });
    state.notes = this.noteStringToArray(noteStr);
    this.setState(state);
  };

  noteStringToArray = noteStr => {
    let noteArr = [];
    let note = null;
    for (let i = 0; i < noteStr.length; i++) {
      const c = noteStr.charAt(i).toUpperCase();
      if ("ABCDEFG".indexOf(c) !== -1) {
        noteArr = noteArr.concat(note);
        note = noteMap[c];
      }
      if (c !== noteStr.charAt(i)) {
        note += 7;
      }
      if (c === ",") {
        note -= 7;
      }
      if (c === "'") {
        note += 7;
      }
    }
    noteArr = noteArr.concat(note);
    noteArr.shift();
    return noteArr;
  };

  render() {
    const sizex = 500;
    const lineHeight = 10;
    const noteSpace = 30;
    return (
      <div className="App">
        <svg width="500" height="300">
          <text x={sizex / 2} y="30" textAnchor="middle">
            {this.state.title}
          </text>
          <Stanza
            signature={this.state.key}
            lineHeight={lineHeight}
            width={sizex}
          />
          {this.state.notes.map((note, i) => {
            const x = 35 + i * noteSpace;
            const y = 30 + 6 * lineHeight - (note * lineHeight) / 2;
            const r = lineHeight / 2;
            console.log(x, y, r);
            return <circle cx={x} cy={y} r={r} fill="black" />;
          })}
          <foo />
        </svg>

        <textarea onChange={this.handleChange} value={this.state.abc} />
      </div>
    );
  }
}

export default App;
