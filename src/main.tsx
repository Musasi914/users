import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import { RouterProvider } from "react-router-dom";
import router from "./route/route";
import LoginUserProvider from "./provider/loginUserProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginUserProvider>
      <RouterProvider router={router} />
    </LoginUserProvider>
  </StrictMode>
);
