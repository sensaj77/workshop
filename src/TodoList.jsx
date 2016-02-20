import React from "react";

class TodoList extends React.Component {
  render() {

    // Dodajmy listę todosów
    
    let todoListElement = this.props.todos.map( (todo, index) => <li key={ index }>{ todo }</li>);
    return (
      <div className="todo-list">
        { /* // W jsx możemy korzystać z czystego JSa używając {} */ }
        <ul>{ todoListElement }</ul>
      </div>
    );
  }
}

export default TodoList;
