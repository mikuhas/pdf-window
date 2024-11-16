import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { Parent } from "./Parent";
import { Child } from "./Child";

export const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      Component: Parent,
    },
    {
      path: "/child",
      Component: Child,
    },
  ] as const satisfies RouteProps[];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, Component }, i) => (
          <Route key={i} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

