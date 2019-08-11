import React from 'react';

export default function sortData(tableData, tableKey, dir){

  var dataLength = tableData.length;

  if(dataLength){

    if(dir === "dsc"){

      tableData.sort(function(a, b) {

        var nameA = a[tableKey]; // ignore upper and lowercase
        var nameB = b[tableKey]; // ignore upper and lowercase

        if (nameA < nameB) {

          return -1;
        }
        if (nameA > nameB) {

          return 1;
        }

        // names must be equal
        return 0;
      });

    } else {

      tableData.sort(function(a, b) {

        var nameA = a[tableKey]; // ignore upper and lowercase
        var nameB = b[tableKey]; // ignore upper and lowercase

        if (nameA > nameB) {

          return -1;
        }
        if (nameA < nameB) {

          return 1;
        }

        // names must be equal
        return 0;
      });
    }
  }

  return;

}
