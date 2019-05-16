import React, { Component } from "react";

class FormBar extends Component {
  state = {
    name: "",
    date: "",
    time: "",
    guests: ""
  };

  collectInputs = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="FormBar">
        <form
          action=""
          onSubmit={e => this.props.makeReservation(this.state, e)}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.collectInputs}
          />
          <input
            type="text"
            name="date"
            placeholder="Date (mm/dd)"
            onChange={this.collectInputs}
          />
          <input
            type="text"
            name="time"
            placeholder="Time"
            onChange={this.collectInputs}
          />
          <input
            type="text"
            name="guests"
            placeholder="Number of guests"
            onChange={this.collectInputs}
          />
          <button className="btn">Make Rineservation</button>
        </form>
      </div>
    );
  }
}

export default FormBar;
