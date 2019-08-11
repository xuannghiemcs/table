import React from 'react';

export default function generateRows(tableData, tableKey){

  var tableRow = [];

  var dataLength = tableData.length;
  var keyLength = tableKey.length;


  if(dataLength && keyLength){

    for(let i = 0; i < dataLength; i++){

      var temp = [];
      for(let j = 0; j < keyLength; j++){

        if(tableKey[j]["render"]){
          temp.push(<td>{tableKey[j].render(tableData, tableKey, i, j)}</td>);
        }else{
          temp.push(<td>{tableData[i][tableKey[j]["key"]]}</td>);
        }
      }
      tableRow.push(<tr>{temp}</tr>);
    }
  }

  return (tableRow);

}
