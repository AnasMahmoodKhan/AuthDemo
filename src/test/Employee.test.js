import React from "react";
import * as reactRedux from "react-redux";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory, setHookState } from "./testUtils";
import Employees from "../components/Employees";
const reactMock = require("react");
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Employees store={store} />);
  return wrapper;
};

describe("Employee component", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });
  test("should render Employee component without error", () => {
    useSelectorMock.mockReturnValue({});
    const component = findByTestAttr(setup(), "Employee");
    expect(component).toHaveLength(1);
  });

  test("should render Add Employee button and 'Employee List Heading'", () => {
    useSelectorMock.mockReturnValue({});
    // const mockSetState = jest.fn();
    // jest.mock("react", () => ({
    //   ...jest.requireActual("react"),
    //   useState: (initial) => [initial, mockSetState],
    // }));
    const component = findByTestAttr(setup(), "Employee");
    const heading = component.find("h1");
    expect(heading.text()).toEqual("Employee List");
    const button = component.find("button");
    expect(button.text()).toEqual("Add Employee");
    // button.props().onClick();
    // expect(mockSetState).toHaveBeenCalledWith(1);
  });

  test("should render Spinner when Employee List is loading", () => {
    useSelectorMock.mockReturnValue({ isLoading: true });
    const component = findByTestAttr(setup(), "Spinner");
    expect(component).toHaveLength(1);
  });

  describe("DataTable components test", () => {
    test("should render DataTable when Employee_List is recieved", () => {
      useSelectorMock.mockReturnValue({
        isLoading: false,
        employee_list: ["abc", "xyz"],
      });
      const component = findByTestAttr(setup(), "Spinner");
      expect(component).toHaveLength(0);

      let dataTable = findByTestAttr(setup(), "dataTable");
      expect(dataTable).toHaveLength(1);
      expect(dataTable.props().data).toEqual(["abc", "xyz"]);
    });
  });

  describe("Add Employee test", () => {
    test("should change state of AddEmployee to true on Add Employee button is clicked", () => {
      useSelectorMock.mockReturnValue({});
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation((init) => [init, setState]);
      const component = findByTestAttr(setup(), "Employee");
      const button = component.find("button");
      button.props().onClick();
      expect(setState).toHaveBeenCalledWith(true);
    });

    test("should render Add Employee form when add employee button is clicked", () => {
      useSelectorMock.mockReturnValue({});
      reactMock.useState = setHookState({
        AddEmployee: true,
        EditEmployee: false,
        EditId: "",
        deleteEvent: false,
      });
      const component = findByTestAttr(setup(), "AddEmployeeForm");
      expect(component).toHaveLength(1);
    });
  });

  describe("Edit Employee test", () => {
    test("should change state of EditEmployee to true on Edit Employee button is clicked", () => {
      useSelectorMock.mockReturnValue({
        employee_list: [
          {
            id: "XY09",
            name: "Kiran Kher",
            department: "Operations",
            designation: "Junior Manager",
            salary: 30000,
            gender: "Male",
          },
          {
            id: "XY10",
            name: "Laurel",
            department: "Operations",
            designation: "Junior Manager",
            salary: 27000,
            gender: "Male",
          },
        ],
      });
      const setState = jest.fn();
      const useStateSpy = jest.spyOn(React, "useState");
      useStateSpy.mockImplementation((init) => [init, setState]);
      const component = findByTestAttr(setup(), "dataTable").dive();
      const button = component.find('button[children="Edit"]');
      button.at(1).props().onClick();
      expect(setState).toHaveBeenCalledWith(true);
    });
    test("should render Edit Employee form when edit employee button is clicked", () => {
      useSelectorMock.mockReturnValue({
        employee_list: [
          {
            id: "XY09",
            name: "Kiran Kher",
            department: "Operations",
            designation: "Junior Manager",
            salary: 30000,
            gender: "Male",
          },
          {
            id: "XY10",
            name: "Laurel",
            department: "Operations",
            designation: "Junior Manager",
            salary: 27000,
            gender: "Male",
          },
        ],
      });
      reactMock.useState = setHookState({
        AddEmployee: false,
        EditEmployee: true,
        EditId: "",
        deleteEvent: false,
      });
      const component = findByTestAttr(setup(), "EditEmployeeForm");
      expect(component).toHaveLength(1);
    });
  });
});
