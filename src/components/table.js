import _ from "lodash";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useRowSelect,
} from "react-table";

export const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const DataTable = ({ columns, data, deleteIds, editId, hideEdit }) => {
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onSubmit = () => {
      setGlobalFilter(value || undefined);
    };

    return (
      <span>
        <form onSubmit={onSubmit}>
          <div class="form-group row">
            <label htmlFor="search" class="col text-right col-form-label">
              Search :
            </label>

            <div class="col-8">
              <input
                className="form-control"
                value={value || ""}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                  fontSize: "1rem",
                }}
              />
            </div>
          </div>
        </form>
      </span>
    );
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    selectedFlatRows,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, selectedRowIds },
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
  } = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",

          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),

          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );
  const [deleteButton, setdeleteButton] = useState(false);
  useEffect(() => {
    if (!_.isEmpty(selectedRowIds)) {
      setdeleteButton(true);
    } else {
      setdeleteButton(false);
    }
  }, [selectedRowIds]);

  const handleDelete = () => {
    let delete_rows_id = selectedFlatRows.map((item) => item.original.id);
    if (hideEdit) {
      delete_rows_id = selectedFlatRows.map((item) => item.original.name);
    }
    deleteIds(delete_rows_id);
  };
  const handleClick = (obj) => {
    editId(obj.id);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
          <div className="col-md-3">
            <ul className="pagination ">
              <li>
                <button
                  className={`btn btn-danger ${
                    !deleteButton && "disabled"
                  }  mr-4`}
                  onClick={handleDelete}
                  disabled={!deleteButton}
                >
                  Delete
                </button>
              </li>

              <li className={`page-item ${!canPreviousPage && "disabled"}`}>
                <button
                  className={`page-link`}
                  onClick={() => gotoPage(0)}
                  disabled={!canPreviousPage}
                >
                  {"<<"}
                </button>
              </li>
              <li className={`page-item  ${!canPreviousPage && "disabled"}`}>
                <button
                  className={`page-link p-2 `}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  {"<"}
                </button>
              </li>
              <li className={`page-item ${!canNextPage && "disabled"}`}>
                {" "}
                <button
                  className={`page-link p-2 `}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  {">"}
                </button>
              </li>
              <li className={`page-item ${!canNextPage && "disabled"}`}>
                <button
                  className={`page-link p-2 `}
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                >
                  {">>"}
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            {" "}
            <form className="form-inline justify-content-center">
              <div className="form-group">
                <label htmlFor="Page">
                  {" "}
                  Page : {pageIndex + 1} of {pageOptions.length} | Go To Page
                </label>
                <input
                  type="number"
                  className="form-control mx-2"
                  placeholder="Go to page"
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const page = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(page);
                  }}
                  style={{ width: "100px" }}
                />
              </div>
            </form>
          </div>

          <div className="col-md-2">
            {" "}
            <select
              className="form-control"
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="thead-dark text-center"
              {...headerGroup.getHeaderGroupProps()}
            >
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <>
                          &nbsp;{" "}
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
                            class="feather feather-arrow-down"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        </>
                      ) : (
                        <>
                          &nbsp;{" "}
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
                            class="feather feather-arrow-up"
                          >
                            <line x1="12" y1="19" x2="12" y2="5" />
                            <polyline points="5 12 12 5 19 12" />
                          </svg>
                        </>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
              {!hideEdit && <th>Action</th>}
            </tr>
          ))}
        </thead>
        <tbody className="text-center" {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {!hideEdit && (
                  <button
                    className="btn btn-sm btn-secondary mt-2"
                    onClick={() => handleClick({ ...row.values })}
                  >
                    Edit
                  </button>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
