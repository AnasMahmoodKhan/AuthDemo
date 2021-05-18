import React, { useState } from "react";
import { MDBDataTableV5 } from "mdbreact";
import SideNav from "./SideNav";
import { data_Table } from "../helpers/TableDataReport";

const Tables = () => {
  const [datatable, setDatatable] = useState(data_Table);
  return (
    <>
      <SideNav />
      <div className="container-fluid">
        <div className="row">
          <main
            id="reports"
            className="col-md-9 ml-sm-auto col-lg-10 px-md-4 border-left"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Users Visit</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Share
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                  >
                    Export
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-calendar"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  This week
                </button>
              </div>
            </div>

            <MDBDataTableV5
              hover
              entriesOptions={[10, 20, 25]}
              entries={10}
              pagesAmount={4}
              data={datatable}
              materialSearch
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Tables;
