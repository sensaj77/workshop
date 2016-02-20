import React from "react";

class TodoForm extends React.Component {
  
 static propTypes = {
    newTodo: React.PropTypes.func.isRequired,
  };
constructor(props) {
  super(props);
}

  // 2. Funkcja zostanie wywołana na każdy event
 handleSubmit(e) {
    e.preventDefault();
    this.props.newTodo(this.state.todo);
  }


  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }
  

  render() {
    return (
      <div className="todo-form">
        <form onSubmit={ ::this.handleSubmit}>
          { /* // 1. Do przechwytywania zmian w input przyda się onChange. */ }
          <input type="text" name="todo" onChange={ ::this.handleChange } />
          <input type="submit"  />
        </form>
      </div>
    );
  }
}

export default TodoForm;
