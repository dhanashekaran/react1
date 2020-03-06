import React, { Component } from "react";

export default class Todoinput extends Component {
  render() {
    const {item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="Todoinput">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type Text Here.."
            className="textinput"
            value={item}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="addbutton">
            {editItem ? "Edit Text" : "Add+Text"}
          </button>
        </form>
      </div>
    );
  }
}
