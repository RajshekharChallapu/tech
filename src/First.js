import React from 'react'
import FirstFunc from './FirstFunc'
  

class First extends React.Component {
  render() {
    return (
      <>
      <FirstFunc
      name="Vue.js"
      platform="FE"
      Trainer="raja"
      image="https://vuejs.org/images/logo.svg"
      />
      <FirstFunc
      name="Angular.js"
      platform="FE"
      Trainer="raja"
      image="https://vuejs.org/images/logo.svg"
        />
      </>
    );
  }
}

export default First;