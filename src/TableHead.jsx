import React from "react";

export default class TableHead extends React.Component {


  render() {

  	let tableHead = [
  		["cena", "nazwa", "opis"]
  	]
  	

  	

  	var tableHeadJSX = tableHead.map(function(headItem,index){
  		return (
  				<tr key={index}>
  					<td>{headItem[0]}</td>
  					<td>{headItem[1]}</td>
  					<td>{headItem[2]}</td>
  				</tr>
  			)
  	})

  	

    return (
    	<thead>
      		{tableHeadJSX}
      	</thead>
    	
    );
  }
}
