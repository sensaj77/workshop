import React from "react";
import TableBody from "./TableBody.jsx";
import TableHead from "./TableHead.jsx";
import TodoList from "./TodoList.jsx";

const todos = [ "Task 434123", "Task 434233", "Task 434332" ];

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: todos
    };
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
      		<TodoList todos={this.state.todos}/>
      	</div>
    );
  }
}
