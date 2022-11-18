import React from "react";
import { useRoutes } from "react-router-dom";
// const Home = lazy(() =>
//   import("../pages/Home").then(({ Home }) => ({ default: Home }))
// );
// const Movie = lazy(() =>
//   import("../pages/Movie").then(({ Movie }) => ({ default: Movie }))
// );
import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";

export const Routers = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: ":type/:id", element: <Movie /> },
  ]);
  return <>{routes}</>;
};
