import React, { Component } from "react";

export default class Todoitem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="Todoitem">
        <h3>{title}</h3>
        <i class="material-icons edit-symbol" onClick={handleEdit}>
          edit
        </i>
        <i class="material-icons delete-symbol" onClick={handleDelete}>
          delete
        </i>
      </li>
    );
  }
}
