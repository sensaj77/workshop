import React from "react";

export default class TableBody extends React.Component {


  render() {
    /*console.log(this.props.todos);*/
    
  	let tableRows = [
  		
  		["product1", "product2", "product3"],
  		["product4", "product5", "product6"]
  	];

  	

  	
  	var tableBodyJSX = tableRows.map(function(rowItem, index){
  		return (
  				<tr key={index}>
  					<td>{rowItem[0]}</td>
  					<td>{rowItem[1]}</td>
  					<td>{rowItem[2]}</td>
  				</tr>
  			)
  	})




    return (
    	<tbody>
      		
          {tableBodyJSX}
      	</tbody>
    );
  }
}
