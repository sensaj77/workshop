import React from "react";

/*Sortowanie po nazzwie i cenie - patrz handleChange - po kliknieciu ma posortowac od najwyzszej do najnizszej
wykorzystac etykiety  w tabeli, zeby akcja po kliknieciu zostala wywolana wiadomo onClick*/


/*W komponencie listy produktów dodaj pole tekstowe. Na podstawie wpisanego do niego tekstu wyfiltruj produkty z listy
Dodaj proste sortowanie produktów po cenie i nazwie. Do sortowania wykorzystaj etykiety w nagłówku tabeli
Przenieść funkcje sortujące do głównego komponentu i przekaż je do komponentów, które ich potrzebują
Dodaj walidację propsów wszystkich komponentów poprzez zdefiniowanie propTypes*
Zdefiniuj dokładny shape w propTypes***/


/*Zadania - iteracja 5

Redux

stwórz akcję sortownia listy produktów, napisz funkcję redukującą oraz stwórz store
połącz store z głównym komponentem
stwórz komponent zawierający listę produktów dodanych do koszyka
przy każdym produkcje dodaj przycisk "Dodaj do koszyka", po kliknięciu wyświetl produkt w komponencie koszyka
*/

export default class TableBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.products,
      currentProducts: this.props.products
    }

    console.log(this.props.products)
  }

handleChange(event) {
    console.log( event.target.innerHTML);

    let tempTable =[];

    this.state.products.map(function (item){
      let itemName = item.nazwa;
      let itemDesciption = item.opis;
      let itemPrice = item.cena;

       if( itemName.indexOf(event.target.value) !== -1) {
          tempTable.push(item);
       } /*if ( itemDesciption.indexOf(event.target.value) !== -1 ) {
        tempTable.push(item);
       } if ( itemPrice.indexOf(event.target.value) !== -1 ) {
        tempTable.push(item);
       }*/
    })

    this.setState({
      currentProducts: tempTable
    })
  }

  sortByName(event){
    console.log("sortedByName called");
    let nameColumnInnerHtml = event.target.innerHTML;
    console.log(nameColumnInnerHtml);
    this.setState({
      /*sortedByNameProducts: nameSorted*/
    })
  }

  
  sortByPrice(event) {
    console.log("sortByPrice called");

    this.setState({
      /*sortedByPriceProducts: priceSorted*/
    })
  }


  sortByDescription(event) {
  console.log("sortByDescription called");
  this.setState({
      /*sortedByNameProducts: nameSorted*/
    })
  }


/*Po prostu jak zrobię map na konkretnym arrayu to mogę poprzez element dot (.) nazwaProperty
wyświetlać/uzywac/ działać na właśnościach */

  render() {

    var myTable = this.state.currentProducts.map( item => 
              <tr key={item.id} className={item.mappingClass}>
                <td>{item.nazwa}</td>
                <td>{item.cena}</td>
                <td>{item.opis}</td>
              </tr>
              )
   
   
    return (
      <div>
      
    	<table className="table table-hover">

        <thead>
          <tr>
          <td onClick={::this.sortByName}>nazwa</td>
          <td onClick={::this.sortByPrice}>cena</td>
          <td onClick={::this.sortByDescription}>opis</td>
          </tr>
        </thead>
        <tbody >
            {myTable}
        </tbody>
      <tfoot>
      </tfoot>
      </table>
      <form className="table-form"  >
          { /* // 1. Do przechwytywania zmian w input przyda się onChange. */ }
          <input type="text" name="filter" onChange={::this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}


/*  var tableHeadJSX = tableHead.map(function(headItem,index){
      return (
          <tr key={index}>
            <td>{headItem[0]}</td>
            <td>{headItem[1]}</td>
            <td>{headItem[2]}</td>
          </tr>
        )
    })*/

    
  /*  var tableBodyJSX = tableRows.map(function(rowItem, index){
      return (
          <tr key={index}>
            <td>{rowItem[0]}</td>
            <td>{rowItem[1]}</td>
            <td>{rowItem[2]}</td>
          </tr>
        )
    })*/



//Do onSubmit filter for now

/*
ToDOForm.jsx

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  //4/ 2. I zatrzymajmy domyślną akcję
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="todo-form">
        { }
        <form onSubmit={ ::this.handleSubmit }>
          <input type="text" name="todo" onChange={ ::this.handleChange } />
          <input type="submit" />
        </form>
      </div>
    );
  }
}*/

/*
Parent - App.jsx


import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  //3/ 2. Chcemy dostać nową tablicę, więc unikamy .push()
  newTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div className="app">
        {  // 1. Do komponentu możemy przekazać też funkcję  }
        <TodoForm newTodo={ ::this.newTodo } />
        <TodoList todos={ this.state.todos } />
      </div>
    );
  }
}

export default App;
*/