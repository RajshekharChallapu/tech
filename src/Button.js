import React from 'react';
import CounterHoc from './CounterHoc'

class Button extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.IncCnt}>
          clicked
          {this.props.cnt}
        </button>
      </div>
    )
  }
}

export default CounterHoc(Button);