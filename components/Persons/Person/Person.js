import React, { Component } from "react";
import { render } from "react-dom";
import Radium, { StyleRoot } from "radium";

import "./Person.css";



const person = props => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  return (
    <StyleRoot>
      <div className="Person" style={style}>
        <button className="deleteBtn" onClick={props.click}>
          X
        </button>
        <div>
          <p>
            I'm a Person, my name is {props.name} and I am {props.age}{" "}
            years-old!
          </p>
        </div>
        <p>{props.children}</p>
        <div>
          {" "}
          <label>
            Escreva aqui o seu nome:
            <input
              type="text"
              onChange={props.changedPerson}
              value={props.name}
            />
          </label>
        </div>
        <div>
          <label>
            Qual é a sua idade?
            <input
              type="number"
              min="0"
              max="99"
              onChange={props.changedAge}
              value={props.age}
            />
          </label>
        </div>
      </div>
    </StyleRoot>
  );
};

export default Radium(person);
