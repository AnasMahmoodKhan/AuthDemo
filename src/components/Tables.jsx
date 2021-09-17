import React, { useEffect, useMemo, useState } from "react";

import SideNav from "./SideNav";

import DataTable from "./table";
import { useDispatch, useSelector } from "react-redux";
import { delete_reports, fetch_data_table } from "../store/actions/DataAction";
import SpinnerLoading from "../helpers/Spinner";

const Tables = () => {
  const [deleteEvent, setdeleteEvent] = useState(false);
  const state = useSelector((state) => state.data);
  const { table_data, isLoading } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_data_table);
    setdeleteEvent(false);
  }, [dispatch, deleteEvent]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Position",
        accessor: "position",
      },
      {
        Header: "Visit Date",
        accessor: "date",
      },
    ],

    []
  );
  const delete_rows = (reports) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      dispatch(delete_reports(reports));
      alert("Delete Successs");
      setdeleteEvent(true);
    }
  };

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
              </div>
            </div>
            {isLoading ? (
              <SpinnerLoading />
            ) : (
              <DataTable
                columns={columns}
                hideEdit={true}
                deleteIds={delete_rows}
                data={table_data}
              />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Tables;
