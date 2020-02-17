import React, { Component } from "react";
import { render } from "react-dom";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asd1", name: "José", age: 23 },
      { id: "asd2", name: "Rui", age: 33 },
      { id: "asd3", name: "Pedro", age: 44 }
    ],
    otherState: "Some other value",
    showPersons: false
  };

  // REMOVE PERSONS FROM STATE
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // CHANGE NAME OF PERSONS
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  ageChangedHandler = (event, id) => {
    if (event.target.value < 0 || event.target.value > 99) {
      return;
    }
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];

    person.age = event.target.value;
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  // SHOW HIDDEN PERSONS
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // INLINE STYLES
    const btnStyle = {
      off: {
        cursor: "pointer",
        height: "50px",
        backgroundColor: "red",
        transitionDuration: ".2s",
        transitionTimingFunction: "ease-out",
        fontWeight: 900,
        ":hover": {
          backgroundColor: "#f79d6d",
          color: "yellow"
        }
      },
      on: {
        cursor: "pointer",
        height: "50px",
        backgroundColor: "green",
        transitionDuration: ".2s",
        transitionTimingFunction: "ease-out",
        color: "white",
        fontWeight: 900,
        ":hover": {
          backgroundColor: "lightgreen",
          color: "yellow"
        }
      }
    };

    // DECLARATION OF VARIABLES
    let Persons = null;
    let classes = [];
    let otherState = this.state.otherState;

    if (this.state.showPersons) {
      Persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                changedPerson={event =>
                  this.nameChangedHandler(event, person.id)
                }
                changedAge={event => this.ageChangedHandler(event, person.id)}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                changedPerson={event =>
                  this.nameChangedHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );
    }

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    } else {
      classes.push("green");
    }

    return (

        <div className="App">
          <h1>Hello World</h1>
          <button
            style={this.state.showPersons ? btnStyle.on : btnStyle.off}
            onClick={this.togglePersonsHandler}
          >
            Switch Name
          </button>
          {Persons}
          <p className={classes.join(" ")}>{otherState}</p>
        </div>
    );
  }
}

export default App;

// App.js
// Root component where our child-components will be rendered
