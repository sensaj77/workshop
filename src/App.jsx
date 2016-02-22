import React from "react";
import TableBody from "./TableBody.jsx";
import TableHeader from "./TableHeader.jsx";





export default class App extends React.Component {

 

  constructor(props) {
    super(props);

    this.state = {
      products : [
      {
        id: 1,
        nazwa: "product1",
        cena: "5zł",
        opis: "odkurzacz"
      },
       {
        id: 2,
        nazwa: "LG",
        cena: "55zł",
        opis: "telewizor"
      },
       {
        id: 3,
        nazwa: "samsung",
        cena: "555zł",
        opis: "telefon"
      }

    ]
     /* filteredProducts:  this.props.filteredProducts*/
    }


  }
  


  render() {
    
   
    return (
    	<div>
      		<TableHeader  />
      		<TableBody products={this.state.products} />
         

      	</div>
    );
  }
}


/*
<TodoForm newTodo={::this.newTodo} />
<TodoList todos={this.state.todos} />

*/