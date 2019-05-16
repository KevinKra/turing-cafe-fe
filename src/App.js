import React, { Component } from "react";
import "./App.css";

import FormBar from "../src/components/FormBar/FormBar";
import CardSection from "../src/components/CardSection/CardSection";

class App extends Component {
  state = {
    reservations: []
  };
  makeReservation = (state, e) => {
    e.preventDefault();
    const key = Date.now();
    const newState = { ...state, key, id: key };
    e.currentTarget.reset();
    const combinedState = [...this.state.reservations, newState];
    this.setState({ reservations: combinedState });
  };

  removeReservation = key => {
    const output = this.state.reservations.filter(reservation => {
      if (reservation.id !== key) {
        return reservation;
      }
    });
    this.setState({ reservations: output });
  };

  render() {
    return (
      <div className="App">
        <header className="app-title">Turing Cafe Reservations</header>
        <FormBar makeReservation={this.makeReservation} />
        <CardSection
          reservations={this.state.reservations}
          removeReservation={this.removeReservation}
        />
      </div>
    );
  }
}

export default App;
