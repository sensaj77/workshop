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
        opis: "odkurzacz",
        mappingClass: "class-one"
      },
       {
        id: 2,
        nazwa: "LG",
        cena: "55zł",
        opis: "telewizor",
        mappingClass: "class-two"
      },
       {
        id: 3,
        nazwa: "samsung",
        cena: "555zł",
        opis: "telefon",
        mappingClass: "class-three"
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