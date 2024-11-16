import { StrictMode } from "react";
import ReactDOM from 'react-dom/client'
import "./index.css";
import { AppRoutes } from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
