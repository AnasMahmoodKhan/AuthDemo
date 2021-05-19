import React from "react";
import { useTable, usePagination } from "react-table";

const DataTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <ul className="pagination justify-content-center">
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
          <div className="col-md-6">
            {" "}
            <form className="form-inline justify-content-center">
              <div className="form-group">
                <label for="inputPassword6">
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

          <div className="col-md-3">
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
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
