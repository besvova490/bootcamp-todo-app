import React from "react";
import PropTypes from "prop-types";

//components
import Clock from "../components/Clock";

//elements
import CheckBox from "../elements/CheckBox";

//assets
import TrashIcon from "../icons/TrashIcon";
import "../assets/containers/todo-list.scss";


class TodoList extends React.Component {


  render() {
    const { list = [], onStatusChange, onDelete } = this.props;

    return (
      <ul className="todo-list">
        <li><Clock/></li>
        {
          list.map((item, index) => (
            <li key={index} className="todo-list__item">
              <CheckBox
                label={item.label}
                onCheck={(e) => onStatusChange({ id: item.id, isDone: e })}
              />
              <TrashIcon
                onClick={() => onDelete({ id: item.id })}
              />
            </li>
          ))
        }
      </ul>
    );
  }
}

TodoList.propTypes = {
  list: PropTypes.array,
  onStatusChange: PropTypes.func,
  onDelete: PropTypes.func,
};

export default TodoList;
