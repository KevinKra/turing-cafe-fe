import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    const { name, date, time, guests, id } = this.props;
    return (
      <div className="Card">
        <section>
          <h3>{name}</h3>
          <p>{date}</p>
          <p>{time} pm</p>
          <p>Number of Guests: {guests}</p>
        </section>
        <button
          className="btn"
          onClick={() => this.props.removeReservation(id)}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default Card;
