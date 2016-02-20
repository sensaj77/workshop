import React from "react";
import TableBody from "./TableBody.jsx";
import TableHead from "./TableHead.jsx";
import TodoList from "./TodoList.jsx";
import TodoForm from "./TodoForm.jsx";

export default class App extends React.Component {
  
 

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }
  newTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
    	<div>
      		<h1>Shop List</h1>
      		<table className="table table-hover">
      		<TableHead />
      		<TableBody />
      			
      		<tfoot>
      		</tfoot>
      		</table>
          <TodoForm newTodo={::this.newTodo} />
      		<TodoList todos={this.state.todos} />

      	</div>
    );
  }
}
