import React from 'react'
import {QuarterUp, HalfUp } from "./Notes"
import { CLEF_MID_LINES, NOTES } from '../Constants'

class Note extends React.Component {

    render() {
        console.log('rendering', this.clef, this.name, this.octave)
        return (
            <QuarterUp x={this.props.x} y={this.props.y} />
            )
    }
}

export default Note
