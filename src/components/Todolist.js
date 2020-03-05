import React, { Component } from "react";
import Todoitem from "./Todoitem";

export default class Todolist extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="Todolist">
        <ul>
          <h1>List Below...</h1>
          <hr />
          {items.map(item => {
            return (
              <Todoitem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}

          <button type="button" className="deletebutton" onClick={clearList}>
            Delete All -
          </button>
        </ul>
      </div>
    );
  }
}
