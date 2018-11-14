import React, {Component} from "react"
import "./App.css"
import Stanza from "./components/Stanza"

import Note from './components/Note'
import {LINE_HEIGHT, NOTE_SPACING} from './Constants'
import {parse} from "./logic/Abc"

const noteMap = {
  c: 0,
  d: 1,
  e: 2,
  f: 3,
  g: 4,
  a: 5,
  b: 6
}

const lineHeight = 10
const noteSpace = 30

const placeholder = "T:example\nK:F\nL:1/4\nc2d1/2ef3"

class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    this.setState(parse(placeholder))
  }

  handleChange = (event) => {
    const abc = event.target.value
    this.setState(parse(abc))
  }

  yCoord = (note) => {
    const cLine = 93
    const retval = cLine - noteMap[note.name] * LINE_HEIGHT * 0.5 - note.octave * 3.5 * LINE_HEIGHT
    console.log("return value of note", note, "is", retval)
    return retval
  }

  generateNotes = () => {
    return this.state.notes.map((note, i) => {
      return <Note id={0} x={30 + i * noteSpace} y={100}/>
    })
  }

  render() {
    console.log('rendering', this.state.notes)
    const sizex = 500
    return (<div className="App">
      <Note name="c" octave={0} duration={0.25} clef="g"/>
      <svg width="500" height="300">
        <text x={sizex / 2} y="30" textAnchor="middle">
          {this.state.title}
        </text>
        <Stanza signature={this.state.key} middleY={50}/> {this.generateNotes()}
        <foo/>
      </svg>

      <textarea onChange={this.handleChange} value={this.state.abc}/>
    </div>)
  }
}

export default App
