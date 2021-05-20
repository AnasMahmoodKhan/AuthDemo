import React from "react";
import { useHistory } from "react-router";

const SideNav = () => {
  const history = useHistory();

  return (
    <nav
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse fixed-bottom"
      style={{ bottom: "64%" }}
    >
      <div>
        <ul className="nav flex-column mb-2">
          <li
            className="nav-item"
            style={
              history.location.pathname === "/"
                ? { backgroundColor: "lightgrey", borderRadius: 10 }
                : null
            }
          >
            <a
              className="nav-link"
              style={
                history.location.pathname === "/"
                  ? { color: "#007bff" }
                  : { color: "grey" }
              }
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-home"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              <span className="mx-2">Home</span>
            </a>
          </li>
          <li
            className="nav-item"
            style={
              history.location.pathname === "/dashboard"
                ? { backgroundColor: "lightgrey", borderRadius: 10 }
                : null
            }
          >
            <a
              className="nav-link"
              style={
                history.location.pathname === "/dashboard"
                  ? { color: "#007bff" }
                  : { color: "grey" }
              }
              href="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bar-chart-2"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              <span className="mx-2">Dashboard</span>
            </a>
          </li>
          <li
            className="nav-item"
            style={
              history.location.pathname === "/report"
                ? { backgroundColor: "lightgrey", borderRadius: 10 }
                : null
            }
          >
            <a
              className="nav-link"
              style={
                history.location.pathname === "/report"
                  ? { color: "#007bff" }
                  : { color: "grey" }
              }
              href="/report"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-layers"
              >
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
              <span className="mx-2">Reports</span>
            </a>
          </li>
          <li
            className="nav-item"
            style={
              history.location.pathname === "/employees"
                ? { backgroundColor: "lightgrey", borderRadius: 10 }
                : null
            }
          >
            <a
              className="nav-link"
              style={
                history.location.pathname === "/employees"
                  ? { color: "#007bff" }
                  : { color: "grey" }
              }
              href="/employees"
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
                class="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>

              <span className="mx-2">Employees</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
