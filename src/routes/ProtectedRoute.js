import React from "react";

import { Redirect, Route } from "react-router-dom";

export const ProtectedRoute = ({
  component: C,
  props: cProps,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect to={{ pathname: "/signin", state: props.location }} />
        )
      }
    />
  );
};
