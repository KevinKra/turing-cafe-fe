import React, { Component } from "react";
import Card from "../Card/Card";

class CardSection extends Component {
  appendCards = () => {
    return this.props.reservations.map(reservation => {
      return (
        <Card
          {...reservation}
          key={reservation.key}
          removeReservation={this.props.removeReservation}
        />
      );
    });
  };

  render() {
    return <div className="CardSection">{this.appendCards()}</div>;
  }
}

export default CardSection;
