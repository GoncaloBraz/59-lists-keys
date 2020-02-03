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
/*   deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }; */
  // CHANGE NAME OF PERSONS
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }); // RETURN INDEX OF CHANGED

    const person = {
      ...this.state.persons[personIndex]
    }; // CREATE A COPY WITH ONLY THE INDEX SELECTED

    person.name = event.target.value;
    // SET THE NAME OF PERSON LIKE WAS BEEN PLACED IN INPUT TEXT

    const persons = [...this.state.persons]; // SELECT THE STATE
    persons[personIndex] = person; // CHANGE ONLY IT togglePersonsHandler MODIFICATIONS
    this.setState({
      persons: persons
    }); // SET NEW STATE
  };
  // SHOW HIDDEN PERSONS
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    // INLINE STYLES
    const btnStyle = {
      cursor: "pointer",
      height: "50px"
    };

    let Persons = null;

    if (this.state.showPersons) {
      Persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                changedPerson={event =>
                  this.nameChangedHandler(event, person.id)
                }
                name={person.name}
                age={person.age}
/*                 click={() => this.deletePersonHandler(index)}
 */                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <button style={btnStyle} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {Persons}
      </div>
    );
  }
}

export default App;

// App.js
// Root component where our child-components will be rendered
