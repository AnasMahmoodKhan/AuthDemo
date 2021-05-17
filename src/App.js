import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

import Routes from "./routes/Routes";
import { check_authenticated_user } from "./store/actions/AuthAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(check_authenticated_user);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: 60 }}>
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
