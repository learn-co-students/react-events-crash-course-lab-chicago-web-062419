import React, { Component } from "react";
import {
  drawChromeBoiAtCoords,
  toggleCycling,
  resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
  handleMouseMove = event => {
    // Call function from canvasHelpers.js, pass in mouse position for mousemove event
    drawChromeBoiAtCoords(event.clientX, event.clientY);
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
  };

  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   */

  handleMouseClick = () => {
    // On mouseclick, redirect to togglecycling function in canvasHelpers.js
    toggleCycling();
  };

  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

  handleKeyPress = event => {
    if (event.key === "a") {
      // Call resize function
      resize("+");
    } else if (event.key === "s") {
      resize("-");
    }
  };

  render() {
    return (
      <canvas
        // WHen mouse is moved, redirect to hMM function
        onMouseMove={this.handleMouseMove}
        // WHen mouse is moved, redirect to hMC function
        onClick={this.handleMouseClick}
        // WHen mouse is moved, redirect to hMP function
        onKeyPress={this.handleKeyPress}
        width="900"
        height="600"
        tabIndex="0"
      ></canvas>
    );
  }
}
