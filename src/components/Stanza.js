import React from "react";
import {TrebleClef} from "./Clefs";
import {Sharp, Flat} from "./Accidentials";

import {LINE_HEIGHT, STANZA_WIDTH} from '../Constants'

class Stanza extends React.Component {
    padding = {
        top: 30
    };

    size = {
        clef: {
            w: 2.6 * LINE_HEIGHT,
            h: 6.3 * LINE_HEIGHT
        },
        sharp: {
            w: 1.0 * LINE_HEIGHT,
            h: 3.0 * LINE_HEIGHT
        },
        flat: {
            w: 1.0 * LINE_HEIGHT,
            h: 3.0 * LINE_HEIGHT
        }
    };

    sharpCoordinates = [
        {
            // F#
            x: this.size.clef.w,
            y: this.padding.top - 0.5 * LINE_HEIGHT
        }, {
            // C#
            x: this.size.clef.w + this.size.sharp.w,
            y: this.padding.top + LINE_HEIGHT
        }, {
            // G#
            x: this.size.clef.w + 2 * this.size.sharp.w,
            y: this.padding.top - LINE_HEIGHT
        }, {
            // D#
            x: this.size.clef.w + 3 * this.size.sharp.w,
            y: this.padding.top + 0.5 * LINE_HEIGHT
        }, {
            // A#
            x: this.size.clef.w + 4 * this.size.sharp.w,
            y: this.padding.top + 2.0 * LINE_HEIGHT
        }, {
            // E#
            x: this.size.clef.w + 5 * this.size.sharp.w,
            y: this.padding.top
        }, {
            // B#
            x: this.size.clef.w + 6 * this.size.sharp.w,
            y: this.padding.top + 1.5 * LINE_HEIGHT
        }
    ];

    flatCoordinates = [
        {
            // Bb
            x: this.size.clef.w,
            y: this.padding.top + 1.5 * LINE_HEIGHT
        }, {
            // Eb
            x: this.size.clef.w + this.size.sharp.w,
            y: this.padding.top
        }, {
            // Ab
            x: this.size.clef.w + 2 * this.size.sharp.w,
            y: this.padding.top + 2.0 * LINE_HEIGHT
        }, {
            // Db
            x: this.size.clef.w + 3 * this.size.sharp.w,
            y: this.padding.top + 0.5 * LINE_HEIGHT
        }, {
            // Gb
            x: this.size.clef.w + 4 * this.size.sharp.w,
            y: this.padding.top + 2.5 * LINE_HEIGHT
        }, {
            // Cb
            x: this.size.clef.w + 5 * this.size.sharp.w,
            y: this.padding.top + LINE_HEIGHT
        }, {
            // Fb
            x: this.size.clef.w + 6 * this.size.sharp.w,
            y: this.padding.top + 3.0 * LINE_HEIGHT
        }
    ];

    /* Coordinates for the sharps (first 7) and flats (last 7) */
    generateAccidentialCoordinates = (n, sharpOrFlat) => {
        let coordinates = [];
        if (sharpOrFlat === "sharp") {
            let alternate = true;
            for (let i = 0; i < n; i++) {
                const x = 30 + i * LINE_HEIGHT;
                const y = alternate
                    ? this.padding.top - ((1 + i) * LINE_HEIGHT) / 2
                    : this.padding.top + ((3 - i) * LINE_HEIGHT) / 2;
                coordinates = coordinates.concat({x, y});
                alternate = !alternate;
            }
        }
        return coordinates;
    };

    getSignature = () => {
        const key = this.props.signature
            ? this.props.signature.toLowerCase()
            : "c";
        let coordinates;
        let sharp = true;
        if (key === "c" || key === "am") {
            coordinates = [];
        } else if (key === "g" || key === "em") {
            coordinates = this.sharpCoordinates.slice(0, 1);
        } else if (key === "d" || key === "bm") {
            coordinates = this.sharpCoordinates.slice(0, 2);
        } else if (key === "a" || key === "f#m") {
            coordinates = this.sharpCoordinates.slice(0, 3);
        } else if (key === "e" || key === "c#m") {
            coordinates = this.sharpCoordinates.slice(0, 4);
        } else if (key === "b" || key === "g#m") {
            coordinates = this.sharpCoordinates.slice(0, 5);
        } else if (key === "f#" || key === "d#m") {
            coordinates = this.sharpCoordinates.slice(0, 6);
        } else if (key === "c#" || key === "a#m") {
            coordinates = this.sharpCoordinates;
        } else if (key === "f" || key === "dm") {
            coordinates = this.flatCoordinates.slice(0, 1);
            sharp = false;
        } else if (key === "bb" || key === "gm") {
            coordinates = this.flatCoordinates.slice(0, 2);
            sharp = false;
        } else if (key === "eb" || key === "cm") {
            coordinates = this.flatCoordinates.slice(0, 3);
            sharp = false;
        } else if (key === "ab" || key === "fm") {
            coordinates = this.flatCoordinates.slice(0, 4);
            sharp = false;
        } else if (key === "db" || key === "bbm") {
            coordinates = this.flatCoordinates.slice(0, 5);
            sharp = false;
        } else if (key === "gb" || key === "ebm") {
            coordinates = this.flatCoordinates.slice(0, 6);
            sharp = false;
        } else if (key === "cb" || key === "abm") {
            coordinates = this.flatCoordinates;
            sharp = false;
        }
        // if (key === "f" || key === "dm")
        //   return this.generateAccidentialCoordinates(1, "flat");
        if (coordinates === undefined) {
            return [];
        }

        return coordinates.map((coord, i) => {
            if (sharp) {
                return (<Sharp key={i} x={coord.x} y={coord.y} w={this.size.sharp.w} h={this.size.sharp.h}/>);
            } else {
                return (<Flat key={i} x={coord.x} y={coord.y} w={this.size.flat.w} h={this.size.flat.h}/>);
            }
        });
    };

    render() {
        return (<svg>
            {
                [1, 2, 3, 4, 5].map(i => {
                    const height = this.padding.top + i * LINE_HEIGHT
                    const x2 = STANZA_WIDTH

                    return (<line key={i} x1={0} y1={height} x2={x2} y2={height} stroke="black"/>);
                })
            }
            <TrebleClef x={0} y={this.padding.top + 2} w={this.size.clef.w} h={this.size.clef.h}/> {this.getSignature()}
        </svg>);
    }
}

export default Stanza;
