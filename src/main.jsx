import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProviders from "./Providers/AuthProviders";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <div className="max-w-screen-xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </AuthProviders>
  </React.StrictMode>
);
