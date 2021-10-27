import React, { Component } from 'react'

class EventHandles extends Component {
  state = {
    value: 0,
  }

  clickMe = () => {
    alert('I am clickMe')
    this.setState({
      value: this.state.value+10
    })
  }

  
  render() {
    return (
      <div>
        <h1>Event handling</h1>
        <button onClick={this.clickMe}>Event Handling:</button>
        <br />
        {this.state.value}
      </div>
    ); 
  }
}
export default EventHandles;