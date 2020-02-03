import React, { Component } from "react";
import { render } from "react-dom";
import './Person.css'

const person = props => {
  return (
    <div className="Person" onClick={props.click}>
      <p>
        I'm a Person, my name is {props.name} and I am {props.age} years-old!
      </p>
      <p>{props.children}</p>
      <label>
        Escreva aqui:
        <input
          type="text"
          placeholder="O que está a pensar!"
          onChange={props.changedPerson}
          value={props.name}
        />
      </label>
    </div>
  );
};

export default person;
