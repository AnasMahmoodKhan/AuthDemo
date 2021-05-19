import React, { useEffect, useMemo } from "react";

import SideNav from "./SideNav";

import DataTable from "./table";
import { useDispatch, useSelector } from "react-redux";
import { fetch_data_table } from "../store/actions/DataAction";
import SpinnerLoading from "../helpers/Spinner";

const Tables = () => {
  const state = useSelector((state) => state.data);
  const { table_data, isLoading, error } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_data_table);
  }, [dispatch]);

  const columns = useMemo(
    () => [
      {
        Header: "User Traffic",
        columns: [
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
      },
    ],
    []
  );
  console.log(error);
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
              <DataTable columns={columns} data={table_data} />
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default Tables;
