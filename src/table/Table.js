import React, { Component } from 'react';

import './CherryPick.css';

import generateRows from './components/generateRows';
import generateHeader from './components/generateHeader';

import generateSearchData from './components/generateSearchData';

import generatePagination from './components/generatePagination';

import sortData from './components/sortData';

var sourceFile = require('./components/store/storeSortDirections');

export default class Table extends Component {

  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {
      tableKey: this.props.tableKey,
      tableData: this.props.tableData,
      tableSortDirections: sourceFile,
      searchValue: '',
      activePaginationButton: 0,

    };



    this.handleHeaderSortClicks = this.handleHeaderSortClicks.bind(this);
    this.handleSearchChanges = this.handleSearchChanges.bind(this);



    this.handlePaginationButton = this.handlePaginationButton.bind(this);
    this.handlePaginationDirectionArrows = this.handlePaginationDirectionArrows.bind(this);



  }


  handleHeaderSortClicks(e){
    if(e){
      if(this.state.tableSortDirections["sortHeader"][e]["dir"] === "asc"){
        this.state.tableSortDirections["sortHeader"][e]["dir"] = "dsc";
        sortData(this.state.tableData, this.state.tableKey[e]["key"], "dsc");
      } else {
        this.state.tableSortDirections["sortHeader"][e]["dir"] = "asc";
        sortData(this.state.tableData, this.state.tableKey[e]["key"], "asc");
      }
    }

    this.setState({});

  }


  handleSearchChanges(e){


    this.setState({searchValue: e.target.value});


  }


  handlePaginationButton(e){

    this.setState({activePaginationButton: e});


  }


  handlePaginationDirectionArrows(e, paginationLength){

    var page = this.state.activePaginationButton + e;

    console.log(e, page);
    if(page >= 0 && page < paginationLength){

      this.setState({activePaginationButton: page});

    }


  }


  render() {

    var tableData = this.state.tableData;
    var copyData = [];
    var tableKey = this.state.tableKey;

    if(this.state.searchValue !== ""){

      copyData = generateSearchData(tableData, tableKey,
        this.state.searchValue);

      } else {

        copyData = tableData;

      }

      var pagination = generatePagination(copyData.length, 10,
        this.state.activePaginationButton, this.handlePaginationButton,
        this.handlePaginationDirectionArrows);


        var  actualTableData = [];
        var initialTableData = this.state.activePaginationButton*10;

        for(let i = initialTableData; i < initialTableData + 10; i++){
          if(copyData[i]){
            actualTableData.push(copyData[i]);
          }
        }

        var tableRow = generateRows(actualTableData, tableKey);
        var tableHeader = generateHeader(actualTableData, tableKey,
          this.state.tableSortDirections, this.handleHeaderSortClicks);

          return (
            <div>
            <input type="search"  name="search"
            size="30" onChange = {this.handleSearchChanges.bind(this)}
            ></input>
            <table >{tableHeader.tableHeader}{tableRow}</table>
            {pagination}


            </div>
          );
        }
      }
