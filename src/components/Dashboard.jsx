import React from "react";
import { Line, Pie } from "react-chartjs-2";
import { data, options, optionsPie, dataPie } from "../helpers/chartData";
import ProductsContainer from "../helpers/ProductsContainer";
import SideNav from "./SideNav";
const Dashboard = () => {
  return (
    <>
      <SideNav />
      <div className="container-fluid">
        <div className="row">
          <main
            id="dashboard_nav"
            className="col-md-9 ml-sm-auto col-lg-10 px-md-4 border-left"
          >
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
            <div className="row">
              <div className="col-md-6">
                <Line data={data} width={450} height={350} options={options} />
              </div>
              <br />
              <div className="col-md-6 ">
                <Pie
                  data={dataPie}
                  width={450}
                  height={350}
                  options={optionsPie}
                />
              </div>
            </div>
          </main>
          <ProductsContainer />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
