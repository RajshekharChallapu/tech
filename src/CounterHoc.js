import React from 'react';

// higher order component taking a componnent as parameter
const CounterHoc = function (Button) {

  class NewComponent extends React.Component{
    constructor(props) {
      super();
      this.state = {
        count : 0
      }
    }
    IncrementCounter = () => {
      this.setState({
        count: this.state.count+1
      })
    }
    render() {
      return (
        <Button cnt={this.state.count} IncCnt={this.IncrementCounter}/>
      )
    }
  }
  return NewComponent;
}

export default CounterHoc;