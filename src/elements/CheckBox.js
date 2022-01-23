import React from "react";
import PropTypes from "prop-types";

//assets
import CloseIcon from "../icons/CloseIcon";
import DoneIcon from "../icons/DoneIcon";
import "../assets/elements/checkbox.scss";


class CheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    }

    this.onCheck = this.onCheck.bind(this);
  }

  onCheck() {
    this.setState(
      state => ({ isChecked: !state.isChecked }),
      () => this.props.onCheck && this.props.onCheck(this.state.isChecked));
  }

  
  render() {
    const { label } = this.props;

    return (
      <span className="todo-checkbox">
        <span className="todo-checkbox__inner" onClick={this.onCheck}>
          { this.state.isChecked
            ? <DoneIcon/>
            : <CloseIcon/>
          }
        </span>
        <input
          type="checkbox"
          className="todo-checkbox__input"
        />
        <span>{ label }</span>
      </span>
    );
  }
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  onCheck: PropTypes.func,
  label: PropTypes.string,
};

export default CheckBox;
