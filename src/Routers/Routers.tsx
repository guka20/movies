import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
const Home = lazy(() =>
  import("../pages/Home").then(({ Home }) => ({ default: Home }))
);
const Movie = lazy(() =>
  import("../pages/Movie").then(({ Movie }) => ({ default: Movie }))
);
export const Routers = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: ":type/:id", element: <Movie /> },
  ]);
  return <Suspense fallback={<h1>Loading...</h1>}>{routes}</Suspense>;
};
