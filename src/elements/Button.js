import React from "react";
import PropTypes from "prop-types";

//assets
import "../assets/elements/button.scss";

class Button extends React.Component {


  render() {
    const { children, onClick, ...rest } = this.props;

    return (
      <button className="todo-button" onClick={() => onClick && onClick()} { ...rest }>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
