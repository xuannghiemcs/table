import React from 'react';

export default function generateHeader(tableData, tableKey,
  tableSortDirections, handleHeaderSortClicks){

    var tableHeader = [];
    var tableHeaderBottom = [];
    var sortIcon = "";

    var keyLength = tableKey.length;

    if(keyLength){

      var temp = [];
      var tempBottom = [];
      for(let j = 0; j < keyLength; j++){

        if(tableSortDirections["sortHeader"][j]["dir"] === "asc"){

          sortIcon = (<i class="glyphicon glyphicon-sort-by-alphabet"
          onClick = {handleHeaderSortClicks.bind(this, j)}></i>);

        } else {

          sortIcon = (<i class="glyphicon glyphicon-sort-by-alphabet-alt"
          onClick = {handleHeaderSortClicks.bind(this, j)}></i>);

        }

        if(tableKey[j]["render"]){
          temp.push(<th>{tableKey[j].render(tableData, tableKey)}
          <span>{sortIcon}</span></th>);
          tempBottom.push(<th>{tableKey[j].render(tableData, tableKey)}
          </th>);

        } else{
          temp.push(<th>{tableKey[j]["title"]}
          <span>{sortIcon}</span></th>);
          tempBottom.push(<th>{tableKey[j]["title"]}
          </th>);

        }
      }

      sortIcon = "";
      tableHeader.push(<tr>{temp}</tr>);
      tableHeaderBottom.push(<tr>{tempBottom}</tr>);

    }

    return ({tableHeader, tableHeaderBottom});

  }
