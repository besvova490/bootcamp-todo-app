import React from "react";
import PropTypes from "prop-types";

//assets
import "../assets/elements/input.scss";


class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.value) return;

    this.setState({ value: this.props.value });
  }

  onClick(e) {
    this.setState({ value: e });
    this.props.onChange && this.props.onChange(e);
  }


  render() {
    const { ...rest } = this.props;

    return (
      <input className="todo-input" { ...rest }/>
    );
  }
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.string,
};

export default Input;
