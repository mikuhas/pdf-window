import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { App } from "./App";
import { Child } from "./Child";

export const AppRoutes = () => {
  const routes = [
    {
      path: "/",
      Component: App,
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

