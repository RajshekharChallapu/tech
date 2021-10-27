import React, { Component } from 'react'

 class FormValidations extends Component {
  constructor(props) {
    super();
    this.state = {
      name: ''
    }
  }

  changeNameHandler = (event) => {
    this.setState({
      name:event.target.value
    })
  }
   render() {
     const { name } = this.state;
    return (
      <form>
        <input type='text' value={name} onChange={this.changeNameHandler}></input>
      </form>
    )
  }
}

export default FormValidations;