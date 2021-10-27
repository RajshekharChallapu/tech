

import React, { Component } from 'react'

class ComponentLifeCycle extends Component {
  //Intialization
  constructor(props) {
    super();
    console.log('I am constructor')
    }
  state = {
    num :0,
  }
//component mounting methods
  componentWillMount = () => {
    console.log("componentWillMount")
  }
  componentDidMount = () => {
    console.log('componentDidMount')
  }

  // component update methods
  shouldComponentUpdate = () => {
    console.log("shouldComponentUpdate")
    return true;
    
  }
  componentWillUpdate = () => {
    console.log("componentWillUpdate")
  }
  componentDidUpdate = () => {
    console.log("componentDidUpdate")
  }
  componentWillUnmount = () => {
    console.log("componentWillUnmount")
  
}

  increase = (e) => {
    this.setState({
      num: this.state.num + 1
    });
  };

  render() {
    return (
      <div>
        <p>Welcome to react component life cycle</p>
        <hr></hr>
        <br />
        <button className="button1" onClick={this.increase}>
          Click Me : {this.state.num}
        </button>
        <br />
      </div>
    )
  }
}

export default ComponentLifeCycle;