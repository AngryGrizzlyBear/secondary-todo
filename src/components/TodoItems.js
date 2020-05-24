import React, { Component } from "react";

class TodoItems extends Component {
  createTasks(items) {
    return <li key={items.key}>{items.text}</li>;
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
    return(
        <ul className="theList">
            {listItems}
        </ul>
    )   
  }
}

export default TodoItems;
