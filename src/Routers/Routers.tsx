import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
export const Routers = () => {
  const routes = useRoutes([{ path: "/", element: <Home /> }]);
  return <>{routes}</>;
};
