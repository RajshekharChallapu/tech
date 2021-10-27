import React from 'react';
import './style.css'

function FirstFunc(props) {
  return (
    <div className="course">
      <h1>{props.name}</h1>
      <img alt="" src={props.image}></img>
      <h2>
        <h3>{props.Trainer}</h3>
        <h3>{props.platform}</h3>
      </h2>
</div>)
}

export default FirstFunc;