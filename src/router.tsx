import App from "@app";
import { PathConstants, RouteConstants, RouteTitles } from "@constants";
import { Home } from "@pages/Home";
import { News } from "@pages/News";
import { NotFound } from "@pages/NotFound";
import { Products } from "@pages/Products";
import {
  createBrowserRouter,
  NonIndexRouteObject,
  RouterProvider,
} from "react-router-dom";

interface Route extends NonIndexRouteObject {
  key: string;
  path: string;
  title: string;
  children?: Route[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const rootRoute: Route = {
  key: RouteConstants.ROOT,
  path: PathConstants.ROOT,
  element: <App />,
  errorElement: <NotFound />,
  title: RouteTitles.ROOT,
  children: [
    {
      key: RouteConstants.HOME,
      path: PathConstants.HOME,
      element: <Home />,
      title: RouteTitles.HOME,
    },
    {
      key: RouteConstants.NEWS,
      path: PathConstants.NEWS,
      element: <News />,
      title: RouteTitles.NEWS,
    },
    {
      key: RouteConstants.PRODUCTS,
      path: PathConstants.PRODUCTS,
      element: <Products />,
      title: RouteTitles.PRODUCTS,
    },
  ],
};

const router = createBrowserRouter([rootRoute]);

export function Router() {
  return <RouterProvider router={router} />;
}
