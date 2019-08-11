import React, { Component } from 'react';
import './App.css';

import { makeData} from "./Utils";

import Table from './table/Table';

let product = makeData();

var sourceFile = require('./data');

product = sourceFile.chr;

let searchValue = '';

class App extends Component {


  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {
      patInfoKey: [{key:'radio', title: "", render: (data) => {return(<input type="radio"
      name= 'test' id = 'test' value = {data.id}/>)}},
      {key:'accession', title: "accession"},
      {key:'chrom', title:"chr"},
      {key:'start', title:"start"},
      {key:'stop', title:"length",
      render: (data, key, i) => {

        var start = "";

        if(i || i === 0){
          start = data[i]["start"];
        }
        return(start)}}
      ],
    };
  }

  render() {

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Datatable</h1>
      </header>

      <Table
      tableData = {product}
      tableKey = {this.state.patInfoKey}
      />
      </div>
    );
  }
}

export default App;
