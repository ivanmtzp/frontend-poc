"use strict";

import React, { Component } from "react";
import { AgGridReact } from "@ag-grid-community/react";
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import LinkCellRenderer from "./link_cell_renderer"
import CheckboxLinkCellRenderer from "./checkbox_link_cell_renderer"
import TimestampLinkCellRenderer from "./timestamp_link_cell_renderer"



class BatchBlotterTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modules: AllCommunityModules,
      columnDefs: [
        {
          headerName: "Underlying",
          field: "ticker",
          width: 180,
          filter: "agTextColumnFilter"
        },
        {
          headerName: "DERIVADOS VM",
          children: [
            {
              headerName: "Source",
              field: "production_source",
              width: 150,
              filter: "agTextColumnFilter",
              cellRendererFramework: LinkCellRenderer
            },
            {
              headerName: "Timestamp",
              field: "production_timestamp",
              width: 200,
              cellRendererFramework: TimestampLinkCellRenderer
            }
          ]
        },
        {
          headerName: "",
          field: "space",
          width: 80,
        },
        {
          headerName: "BATCH",
          children: [
            {
              headerName: "Status",
              field: "batch_status",
              width: 150,
              cellRendererFramework: CheckboxLinkCellRenderer
            },
            {
              headerName: "Timestamp",
              field: "batch_timestamp",
              width: 200,
              cellRendererFramework: TimestampLinkCellRenderer
            }
          ]
        }
      ],
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true
      },      
      rowData: null
    };
  }

  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const updateData = data => {
      this.setState({ rowData: data });
    };

    const data = 
      [
        {ticker:'BBVA1', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA2', production_source: 'Manual', production_timestamp: Number(new Date()), batch_status: 'false', batch_timestamp: Number(new Date())},
        {ticker:'BBVA3', production_source: 'Book', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA4', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA5', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'false', batch_timestamp: Number(new Date())},
        {ticker:'BBVA6', production_source: 'Manual', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA7', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA8', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA9', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'false', batch_timestamp: Number(new Date())},
        {ticker:'BBVA10', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA11', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'empty', batch_timestamp: Number(new Date())},
        {ticker:'BBVA12', production_source: 'Book', production_timestamp: Number(new Date()), batch_status: 'empty', batch_timestamp: Number(new Date())},
        {ticker:'BBVA13', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'empty', batch_timestamp: Number(new Date())},
        {ticker:'BBVA14', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA15', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA16', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'false', batch_timestamp: Number(new Date())},
        {ticker:'BBVA17', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA18', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA19', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA20', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA21', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'empty', batch_timestamp: Number(new Date())},
        {ticker:'BBVA22', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA23', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA24', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA25', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA26', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA27', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA28', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA29', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA30', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())},
        {ticker:'BBVA31', production_source: 'Batch', production_timestamp: Number(new Date()), batch_status: 'true', batch_timestamp: Number(new Date())}
      ]

    updateData(data);
    params.api.sizeColumnsToFit();
  };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>        
        <div
          id="myGrid"
          style={{
            height: "100%",
            width: "100%"
          }}
          className="ag-theme-balham"
        >
          <AgGridReact
            modules={this.state.modules}
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            debug={true}
            rowData={this.state.rowData}
            onGridReady={this.onGridReady}
          />
        </div>
      </div>
    );
  }
}

export default BatchBlotterTable
