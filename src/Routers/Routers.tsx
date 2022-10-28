import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";
export const Routers = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: ":id", element: <Movie /> },
  ]);
  return <>{routes}</>;
};
