import React from "react";
import PropTypes from "prop-types";

//assets
import formBackground from "../assets/images/formBackground.png";
import "../assets/layout.scss";


class MainLayout extends React.Component {


  render() {
    const { children, ...rest } = this.props;

    return (
      <section className="todo-main-layout" { ...rest }>
        { children }
        <img src={formBackground} className="todo-main-layout__background"/>
      </section>
    );
  }
  
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
