import React, { useEffect, useState } from "react";
import { Line, Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { data, options, optionsPie } from "../helpers/chartData";
import ProductsContainer from "../helpers/ProductsContainer";
import SpinnerLoading from "../helpers/Spinner";
import { fetch_data_pie } from "../store/actions/DataAction";
import SideNav from "./SideNav";

const Dashboard = () => {
  const [month, setmonth] = useState("May");
  const state = useSelector((state) => state.data);
  const { data_pie, isLoading } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_data_pie(month));
  }, [dispatch, month]);

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
                <select
                  onChange={(e) => {
                    e.preventDefault();
                    setmonth(e.target.value);
                  }}
                  defaultValue={"May"}
                  className="btn btn-sm btn-outline-secondary dropdown-toggle"
                >
                  {["January", "February", "March", "April", "May"].map(
                    (pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <Line data={data} width={450} height={350} options={options} />
              </div>
              <br />
              <div className="col-md-6 ">
                {isLoading ? (
                  <SpinnerLoading />
                ) : (
                  <Pie
                    data={data_pie}
                    width={450}
                    height={350}
                    options={optionsPie}
                  />
                )}
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
