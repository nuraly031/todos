import React, { Component } from "react";
import "./todo-list-item.css";

export default class TodoListItem extends Component {
  state = {
    edit: false,
    сompleted: false,
  };
  onLabelClick = () => {
    this.setState((state) => {
      return {
        completed: !state.completed,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { edit = false, completed } = this.state;
    let classNames = "description";
    if (completed) {
      classNames += " description-line";
    }

    return (
      <div className="view">
        <input className="toggle" type="checkbox" onClick={this.onLabelClick} />
        <label>
          <span className={classNames}>{label}</span>
          <span className="created">created 5 minutes ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={this.props.onDeleted}
        ></button>
      </div>
    );
  }
}
