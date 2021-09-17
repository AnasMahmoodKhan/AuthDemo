import React from "react";
import { Spinner } from "reactstrap";

const SpinnerLoading = () => {
  return (
    <div className="text-center">
      <Spinner style={{ width: "3rem", height: "3rem" }} type="grow" />
    </div>
  );
};

export default SpinnerLoading;
