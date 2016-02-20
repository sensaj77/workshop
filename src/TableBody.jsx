import React from "react";

/*Sortowanie po nazzwie i cenie - patrz handleChange - po kliknieciu ma posortowac od najwyzszej do najnizszej
wykorzystac etykiety  w tabeli, zeby akcja po kliknieciu zostala wywolana wiadomo onClick*/

export default class TableBody extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: this.props.products,
      currentProducts: this.props.products
    }

    console.log(this.props.products)
  }

handleChange(e) {
    console.log(e.target.name, e.target.value);

    let tempTable =[];
    this.state.products.map(function (item){
      let itemName = item.nazwa;

       if( itemName.indexOf(e.target.value) !== -1) {
          tempTable.push(item);
       }
    })

    this.setState({
      currentProducts: tempTable
    })
  }

  render() {

    var myTable = this.state.currentProducts.map( item => 
              <tr key={item.id}>
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
          <td>nazwa</td>
          <td>cena</td>
          <td>opis</td>
          </tr>
        </thead>
        <tbody>
            {myTable}
        </tbody>
      <tfoot>
      </tfoot>
      </table>
      <form>
          { /* // 1. Do przechwytywania zmian w input przyda się onChange. */ }
          <input type="text" name="sort" onChange={::this.handleChange} />
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