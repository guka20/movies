import React from "react";
import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SeeMore } from "../pages/SeeMore";
export const Routers = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: ":id", element: <SeeMore /> },
  ]);
  return <>{routes}</>;
};
