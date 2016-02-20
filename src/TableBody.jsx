import React from "react";

export default class TableBody extends React.Component {

 

  render() {
   
    console.log(::this.props.handleChange);
    return (
      <div>
    	<table className="table table-hover">
        <thead>
          <tr>
          <td>cena</td>
          <td>nazwa</td>
          <td>opis</td>
          </tr>
        </thead>
        <tbody>
            {this.props.items.map( item => 
              <tr key={item.id}>
                <td>{item.nazwa}</td>
                <td>{item.cena}</td>
                <td>{item.opis}</td>
              </tr>
              )}
        </tbody>
      <tfoot>
      </tfoot>
      </table>
      <form>
          { /* // 1. Do przechwytywania zmian w input przyda się onChange. */ }
          <input type="text" name="sort" onChange={::this.props.handleChange} />
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