import _ from "lodash";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import SpinnerLoading from "../helpers/Spinner";
import {
  delete_employees,
  fetch_employee_list,
} from "../store/actions/DataAction";
import EmployeeForm from "./EmployeeForm";
import SideNav from "./SideNav";
import DataTable from "./table";

const Employees = () => {
  const [AddEmployee, setAddEmployee] = React.useState(false);
  const [EditEmployee, setEditEmployee] = React.useState(false);
  const [EditId, setEditId] = React.useState("");
  const [deleteEvent, setdeleteEvent] = React.useState(false);

  const state = useSelector((state) => state.data);
  const { employee_list, isLoading } = state;
  const dispatch = useDispatch();
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Designation",
        accessor: "designation",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Salary",
        accessor: "salary",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
    ],

    []
  );

  useEffect(() => {
    dispatch(fetch_employee_list);
    setdeleteEvent(false);
  }, [dispatch, deleteEvent]);

  const handleSave = (bool) => {
    setAddEmployee(bool);
    dispatch(fetch_employee_list);
  };

  const handleSaveEdit = (bool) => {
    setEditEmployee(bool);
    setEditId("");
    dispatch(fetch_employee_list);
  };

  const delete_rows = (ids) => {
    // <ModalContainer isOpen={true} text={"delete"} buttonLabel={"xyz"} />;

    if (window.confirm("Are you sure you wish to delete this item?")) {
      dispatch(delete_employees(ids));
      setdeleteEvent(true);
    }
  };

  const edit_row = (id) => {
    if (!_.isEmpty(id)) {
      setEditEmployee(true);
      setEditId(id);
    }
  };

  return (
    <>
      <SideNav />
      {AddEmployee ? (
        <EmployeeForm
          setAddEmployee={(bool) => handleSave(bool)}
          data-test="AddEmployeeForm"
        />
      ) : EditEmployee ? (
        <EmployeeForm
          editting={true}
          edit_id={EditId}
          data-test="EditEmployeeForm"
          setEditEmployee={(bool) => handleSaveEdit(bool)}
        />
      ) : (
        <div className="container-fluid" data-test="Employee">
          <div className="row">
            <main
              id="employees"
              className="col-md-9 ml-sm-auto col-lg-10 px-md-4 border-left"
            >
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Employee List</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button
                      type="button"
                      onClick={() => setAddEmployee(true)}
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Add Employee
                    </button>
                  </div>
                </div>
              </div>
              {isLoading ? (
                <span data-test="Spinner">
                  <SpinnerLoading />
                </span>
              ) : (
                <DataTable
                  data-test="dataTable"
                  columns={columns}
                  data={employee_list}
                  deleteIds={delete_rows}
                  editId={edit_row}
                />
              )}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Employees;
