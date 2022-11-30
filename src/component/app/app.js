import React, { Component } from "react";
import Header from "../header";
import Main from "../main";
import Footer from "../footer";
import "./app.css";
import TodoList from "../todo-list";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Completed task", edit: false, completed: true, id: 1 },
      { label: "Active task", edit: true, completed: false, id: 2 },
      { label: "Active task 2", edit: true, completed: false, id: 3 },
    ],
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newArr = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      console.log(newArr);
      return {
        todoData: newArr,
      };
    });
  };

  render() {
    return (
      <section className="todoapp">
        <Header />
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
        <Footer />
      </section>
    );
  }
}
