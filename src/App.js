import React from "react";

//layout
import MainLayout from "./layouts/MainLayout";

//containers
import TodoList from "./container/TodoList";

//elements
import Input from "./elements/Input";
import Button from "./elements/Button";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
      inputValue: "",
    };

    this.handleAddNewTodo = this.handleAddNewTodo.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAddNewTodo() {
    const { inputValue } = this.state;

    if (!inputValue) return;

    this.setState(state => ({
      inputValue: "",
      todoList: [...state.todoList, { id: Date.now(), label: inputValue, isDone: false }],
    }));
  }

  handleStatusChange({ id, isDone }) {
    const { todoList } = this.state;

    const updatedList = todoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isDone,
        };
      }

      return item;
    });

    this.setState({ todoList: updatedList })
  }

  handleDelete({ id }) {
    const { todoList } = this.state;

    const updatedList = todoList.filter(item => item.id !== id);

    this.setState({ todoList: updatedList })
  }
  

  render() {
    const { todoList, inputValue } = this.state;

    return (
      <MainLayout>
        <div className="todo-main-container">
          <TodoList
            list={todoList}
            onStatusChange={this.handleStatusChange}
            onDelete={this.handleDelete}
          />
        </div>
        <div className="todo-controls">
          <Input
            placeholder="Write your task here"
            value={inputValue}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
          />
          <Button onClick={this.handleAddNewTodo}>
            Add
          </Button>
        </div>
      </MainLayout>
    );
  }
}

export default App;
