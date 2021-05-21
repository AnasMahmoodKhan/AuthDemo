import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerLoading from "../helpers/Spinner";
import {
  add_employee_details,
  edit_employee_details,
  fetch_employee_detail,
} from "../store/actions/DataAction";

const EmployeeForm = ({
  setAddEmployee,
  editting,
  setEditEmployee,
  edit_id,
}) => {
  const state = useSelector((state) => state.data);
  const {
    error,
    isLoading,
    employee_added,
    editting_employee,
    employee_edited,
  } = state;
  const dispatch = useDispatch();
  const [fields, setFields] = useState({
    name: "",
    id: "",
    department: "",
    designation: "",
    salary: "",
    gender: "",
  });
  const [fieldsError, setFieldsError] = useState({
    name: "",
    id: "",
    department: "",
    designation: "",
    salary: "",
    gender: "",
  });

  const validateForm = () => {
    let isValid = true;
    let fieldsError = {
      name: "",
      id: "",
      department: "",
      designation: "",
      salary: "",
      gender: "",
    };

    if (fields.id === "") {
      fieldsError.id = "Please enter valid Employee ID";
      isValid = false;
    }

    if (fields.name === "") {
      fieldsError.name = "Please enter a Name";
      isValid = false;
    }

    if (fields.department === "") {
      fieldsError.department = "Please select a Department";
      isValid = false;
    }

    if (fields.designation === "") {
      fieldsError.designation = "Please Select a Designation";
      isValid = false;
    }

    if (fields.salary === "") {
      fieldsError.salary = "Please enter salary";
      isValid = false;
    }

    if (fields.gender === "") {
      fieldsError.gender = "Please select a gender";
      isValid = false;
    }

    setFieldsError(fieldsError);
    return isValid;
  };

  const onInputChange = ({ target: { id, value } }) => {
    setFields({
      ...fields,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (editting) {
        dispatch(edit_employee_details(edit_id, fields));
      } else {
        dispatch(add_employee_details(fields));
      }
    }
  };

  useEffect(() => {
    if (editting) {
      dispatch(fetch_employee_detail(edit_id));
    }
  }, [dispatch, edit_id, editting]);

  useEffect(() => {
    if (employee_added) {
      alert(`Details added Successfully.`);
      setAddEmployee(false);
    }
    if (employee_edited) {
      alert(`Editted ${edit_id} Successfully.`);
      setEditEmployee(false);
    }
  }, [
    edit_id,
    employee_added,
    employee_edited,
    setAddEmployee,
    setEditEmployee,
  ]);

  useEffect(() => {
    setFields(editting_employee);
  }, [editting_employee]);

  return (
    <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4 border-left">
      <div className="p-2 bg-light border text-center">
        {editting ? (
          <h3>Edit Employee Details</h3>
        ) : (
          <h3>Add new employee details</h3>
        )}
      </div>
      {isLoading && <SpinnerLoading />}
      {error ? (
        <small className="text-danger text-center ml-2">
          {error.message === "Request failed with status code 500" &&
            "Employee with same ID already present"}
        </small>
      ) : null}
      <div className="container bg-light border mt-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">
              <h6>Employee ID</h6>
            </label>
            <input
              type="text"
              id="id"
              disabled={editting}
              defaultValue={fields.id}
              onChange={onInputChange}
              className={`form-control ${fieldsError.id ? "is-invalid" : ""}`}
            />
            {fieldsError.id && (
              <div className="invalid-feedback">{fieldsError.id}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="price">
              <h6>Employee Name</h6>
            </label>
            <input
              type="text"
              id="name"
              defaultValue={fields.name}
              onChange={onInputChange}
              className={`form-control ${fieldsError.name ? "is-invalid" : ""}`}
            />
            {fieldsError.name && (
              <div className="invalid-feedback">{fieldsError.name}</div>
            )}
          </div>

          <div className="row">
            <div className="col-6">
              {" "}
              <div className="form-group">
                <label htmlFor="Department">
                  <h6>Department</h6>
                </label>
                <select
                  id="department"
                  onChange={onInputChange}
                  value={fields.department}
                  className={`form-control ${
                    fieldsError.department ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select Department</option>
                  <option value="Finance">Finance</option>
                  <option value="Operations">Operations</option>
                  <option value="Technology">Technology</option>
                  <option value="HR">HR</option>
                </select>
                {fieldsError.department && (
                  <div className="invalid-feedback">
                    {fieldsError.department}
                  </div>
                )}
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label htmlFor="designation">
                  <h6>Designation</h6>
                </label>
                <select
                  id="designation"
                  value={fields.designation}
                  onChange={onInputChange}
                  className={`form-control ${
                    fieldsError.designation ? "is-invalid" : ""
                  }`}
                >
                  <option value="">Select Designation</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Junior Manager">Junior Manager</option>
                  <option value="Manager">Manager</option>
                  <option value="General Manager">General Manager</option>
                  <option value="Vice President">Vice President</option>
                </select>
                {fieldsError.designation && (
                  <div className="invalid-feedback">
                    {fieldsError.designation}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="salary">
              <h6>Employee Salary</h6>
            </label>
            <input
              type="number"
              id="salary"
              defaultValue={fields.salary}
              onChange={onInputChange}
              className={`form-control ${
                fieldsError.salary ? "is-invalid" : ""
              }`}
            />
            {fieldsError.salary && (
              <div className="invalid-feedback">{fieldsError.salary}</div>
            )}
          </div>

          <div className="form-check">
            <input
              type="radio"
              id="gender"
              onChange={onInputChange}
              value="Male"
              checked={fields.gender === "Male"}
              className="form-check-input"
            />
            <label htmlFor="Male" className="form-check-label">
              Male
            </label>
          </div>

          <div className="form-check">
            <input
              type="radio"
              id="gender"
              onChange={onInputChange}
              value="Female"
              checked={fields.gender === "Female"}
              className="form-check-input"
            />
            <label htmlFor="Female" className="form-check-label">
              Female
            </label>
          </div>
          {fieldsError.gender && (
            <small className="text-danger">{fieldsError.gender}</small>
          )}
          <div className="form-group text-center">
            {editting ? (
              <button className="btn btn-success mr-2">Save Changes</button>
            ) : (
              <button className="btn btn-success mr-2">Save</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;
