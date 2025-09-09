import Home from "../sections/Home";
import Admin from "../sections/Admin";

export const ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
];
