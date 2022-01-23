import React from "react";
import moment from "moment";

//assets
import "../assets/components/clock.scss";


class Clock extends React.Component {


  render() {

    return (
      <div className="todo-clock">
        <span>{ moment().format("MMM DD") }</span>
        <span className="todo-clock__divider">-</span>
        <span>{ moment().format("dd, YYYY") }</span>
      </div>
    );
  }
}

export default Clock;

