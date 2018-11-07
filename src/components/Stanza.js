import React from "react";
import { TrebleClef } from "./Clefs";
import { Sharp, Flat } from "./Accidentials";

class Stanza extends React.Component {
  h = this.props.lineHeight;
  padding = {
    top: 30,
    left: 0,
    right: 0
  };

  size = {
    clef: { w: 2.6 * this.h, h: 6.3 * this.h },
    sharp: { w: 1.0 * this.h, h: 3.0 * this.h },
    flat: { w: 1.0 * this.h, h: 3.0 * this.h }
  };

  sharpCoordinates = [
    {
      // F#
      x: this.padding.left + this.size.clef.w,
      y: this.padding.top - 0.5 * this.h
    },
    {
      // C#
      x: this.padding.left + this.size.clef.w + this.size.sharp.w,
      y: this.padding.top + this.h
    },
    {
      // G#
      x: this.padding.left + this.size.clef.w + 2 * this.size.sharp.w,
      y: this.padding.top - this.h
    },
    {
      // D#
      x: this.padding.left + this.size.clef.w + 3 * this.size.sharp.w,
      y: this.padding.top + 0.5 * this.h
    },
    {
      // A#
      x: this.padding.left + this.size.clef.w + 4 * this.size.sharp.w,
      y: this.padding.top + 2.0 * this.h
    },
    {
      // E#
      x: this.padding.left + this.size.clef.w + 5 * this.size.sharp.w,
      y: this.padding.top
    },
    {
      // B#
      x: this.padding.left + this.size.clef.w + 6 * this.size.sharp.w,
      y: this.padding.top + 1.5 * this.h
    }
  ];

  flatCoordinates = [
    {
      // Bb
      x: this.padding.left + this.size.clef.w,
      y: this.padding.top + 1.5 * this.h
    },
    {
      // Eb
      x: this.padding.left + this.size.clef.w + this.size.sharp.w,
      y: this.padding.top
    },
    {
      // Ab
      x: this.padding.left + this.size.clef.w + 2 * this.size.sharp.w,
      y: this.padding.top + 2.0 * this.h
    },
    {
      // Db
      x: this.padding.left + this.size.clef.w + 3 * this.size.sharp.w,
      y: this.padding.top + 0.5 * this.h
    },
    {
      // Gb
      x: this.padding.left + this.size.clef.w + 4 * this.size.sharp.w,
      y: this.padding.top + 2.5 * this.h
    },
    {
      // Cb
      x: this.padding.left + this.size.clef.w + 5 * this.size.sharp.w,
      y: this.padding.top + this.h
    },
    {
      // Fb
      x: this.padding.left + this.size.clef.w + 6 * this.size.sharp.w,
      y: this.padding.top + 3.0 * this.h
    }
  ];

  /*
 * Coordinates for the sharps (first 7) and flats (last 7)
 */
  generateAccidentialCoordinates = (n, sharpOrFlat) => {
    let coordinates = [];
    if (sharpOrFlat === "sharp") {
      let alternate = true;
      for (let i = 0; i < n; i++) {
        const x = 30 + i * this.props.lineHeight;
        const y = alternate
          ? this.padding.top - ((1 + i) * this.h) / 2
          : this.padding.top + ((3 - i) * this.h) / 2;
        coordinates = coordinates.concat({ x, y });
        alternate = !alternate;
      }
    }
    return coordinates;
  };

  getSignature = () => {
    const key = this.props.signature ? this.props.signature.toLowerCase() : "c";
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
      console.log(`Key ${key} not found`);
      return [];
    }

    return coordinates.map(coord => {
      if (sharp) {
        return (
          <Sharp
            x={coord.x}
            y={coord.y}
            w={this.size.sharp.w}
            h={this.size.sharp.h}
          />
        );
      } else {
        return (
          <Flat
            x={coord.x}
            y={coord.y}
            w={this.size.flat.w}
            h={this.size.flat.h}
          />
        );
      }
    });
  };

  render() {
    console.log("rendering Stanza in", this.props.signature);
    return (
      <svg>
        {[1, 2, 3, 4, 5].map(i => {
          const height = this.padding.top + i * this.h;
          const x1 = this.padding.left;
          const x2 = this.props.width - this.padding.right;

          console.log(height, x1, x2);
          return (
            <line x1={x1} y1={height} x2={x2} y2={height} stroke="black" />
          );
        })}
        <TrebleClef
          x={this.padding.left}
          y={this.padding.top + 2}
          w={this.size.clef.w}
          h={this.size.clef.h}
        />
        {this.getSignature()}
      </svg>
    );
  }
}

export default Stanza;
