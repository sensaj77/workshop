import React from 'react';

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
    	
      		<h1>Shop List</h1>
      		
   
    );
  }
}