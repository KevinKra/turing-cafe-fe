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
    const newState = state;
    const combinedState = [...this.state.reservations, newState];
    this.setState({ reservations: combinedState });
  };

  render() {
    return (
      <div className="App">
        <header>Title</header>
        <FormBar makeReservation={this.makeReservation} />
        <CardSection />
      </div>
    );
  }
}

export default App;
