import React from "react";
import TableBody from "./TableBody.jsx";
import TableHead from "./TableHead.jsx";
import TodoList from "./TodoList.jsx";

export default class App extends React.Component {


  render() {
  	const todos = [ "Task 1", "Task 2", "Task 3" ];
    return (
    	<div>
      		<h1>Shop List</h1>
      		<table className="table table-hover">
      		<TableHead />
      		<TableBody />
      			
      		<tfoot>
      		</tfoot>
      		</table>
      		<TodoList todos={todos}/>
      	</div>
    );
  }
}
