import React from "react";

class TodoForm extends React.Component {
  // 2. Funkcja zostanie wywołana na każdy event
  handleChange(e) {
    console.log(e.target.name, e.target.value);
  }

  render() {
    return (
      <div className="todo-form">
        <form>
          { /* // 1. Do przechwytywania zmian w input przyda się onChange. */ }
          <input type="text" name="todo" onChange={ ::this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
