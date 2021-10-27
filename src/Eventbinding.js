import React, { Component } from 'react'

class EventBinding extends Component {
  constructor(props) {
    super();
  this.state = {
    myEvent: 'React js training',
  }
  }
  courses = () => {
    this.setState({
      myEvent:'Angular course'
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.myEvent}</h1>
        <button onClick={this.courses}>Click ME</button>
      </div>
    )
  }
}
export default EventBinding;