import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";

const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../features/home/pages/Home"));
const Bookmark = lazy(() => import("../features/bookmark/pages/Bookmark"));
const Movies = lazy(() => import("../features/movies/pages/Movies"));
const MovieDetail = lazy(() => import("../features/movies/pages/MovieDetail"));
const NotFound = lazy(() => import("../shared/components/not-found/Notfound"));
const Actors = lazy(() => import("../features/movies/pages/actors/Actors"));
const Producers = lazy(() => import("../features/movies/pages/producers/Producers"));

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "bookmark", element: <Bookmark /> },
        { path: "movies", element: <Movies /> },
        {
          path: "movie/:id",
          element: <MovieDetail title={"Actors"} title2={"Producers"}/>,
          children: [
            { index: true, element: <Actors/> },
            { path: "producers", element: <Producers /> },
          ],
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
};

export default React.memo(AppRoutes);
