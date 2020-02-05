import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    name: ""
  };

  handleSubmit = event;

  render() {
    return (
      <ul>
        {this.state.persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}
