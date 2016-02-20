import React from "react";
import TableBody from "./TableBody.jsx";
import TableHeader from "./TableHeader.jsx";

export default class App extends React.Component {

 

  constructor(props) {
    super(props);

    this.state = {
     /* products : this.props.costam,
      filteredProducts:  this.props.filteredProducts*/
    }

  }
  handleChange(e) {
    console.log(e.target.name, e.target.value);
  }
  render() {
    const items = [
      {
        id: 1,
        nazwa: "product1",
        cena: "5zł",
        opis: "odkurzacz"
      },
       {
        id: 2,
        nazwa: "product2",
        cena: "55zł",
        opis: "telewizor"
      },
       {
        id: 3,
        nazwa: "product3",
        cena: "555zł",
        opis: "telefon"
      }

    ];


   
    return (
    	<div>
      		<TableHeader  />
      		<TableBody items={items} handleChange={this.handleChange} />
         

      	</div>
    );
  }
}


/*
<TodoForm newTodo={::this.newTodo} />
<TodoList todos={this.state.todos} />

*/