import React from 'react';

export default function generatePagination(tableDataLength, divideValue,
  activePaginationButton, handlePaginationButton, handlePaginationDirectionArrows){

    var numButtons = Math.ceil(tableDataLength/divideValue);

    var temp = [];
    temp.push(<a href="#" onClick =
    {handlePaginationDirectionArrows.bind(this, -1, numButtons)}>&laquo;</a>);

    for(let i = 0; i < numButtons; i++){

      if( i === activePaginationButton){
        temp.push(<a class="active" href="#" >{i + 1}</a>);

      }else{

        temp.push(<a href="#" onClick =
        {handlePaginationButton.bind(this, i)}>{i + 1}</a>);

      }

    }

    temp.push(<a href="#" onClick =
    {handlePaginationDirectionArrows.bind(this, 1, numButtons)}>&raquo;</a>)

    return (        <div class="pagination">
    {temp}
    </div>);

  }
