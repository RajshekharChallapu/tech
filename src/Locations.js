/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }
  Increment = (inputValue) => {
    this.setState((prevState, props) => {
      console.log("old value", prevState)
      return { counter: prevState.counter + inputValue };
    })
  }
  

  render(){
    return (
      <div>
        <button className="button" onClick={() =>this.Increment(100)}>
          counter:{this.state.counter}
        </button>
      </div>
    );
};
};

export default Locations;
