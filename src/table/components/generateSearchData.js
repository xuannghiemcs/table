import React from 'react';

export default function generateSearchData(tableData, tableKey,
  searchValue){

    var tableSearchData = [];

    var tableDataLength = tableData.length;
    var keyLength = tableKey.length;
    var data = undefined;
    var dataLength = 0;

    var searchCondition = 0;

    if(tableDataLength && keyLength){

      for(let i = 0; i < tableDataLength; i++){


        for(let j = 0; j < keyLength; j++){



          data = String(tableData[i][tableKey[j]["key"]]).toLowerCase();
          dataLength = data.length;
          if(data){

            var tempSearchValue = '';
            for(let n = 0; n < dataLength; n++){
              tempSearchValue += data[n];

              if(searchValue.toLowerCase() == tempSearchValue){
                tableSearchData.push(tableData[i]);
                searchCondition = 1;
                break;
              }

            }

            if(searchCondition === 1){
              searchCondition = 0;
              break;
            }

          }
        }
      }
    }


    return (tableSearchData);

  }
