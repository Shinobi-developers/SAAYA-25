import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home")); 
const About = lazy(() => import("../pages/About"));
const Events = lazy(() => import("../pages/Events"));
const Results = lazy(() => import("../pages/Results"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: (<Home />) },
      { path: "/about", element: (<About />) },
      { path: "/events", element: (<Events />) },
      { path: "/results", element: (<Results />) },
    ],
  },
  { path: "*", element: (<NotFound />) },
]);
