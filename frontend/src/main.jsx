import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
// import AuthProvider from "./providers/AuthProvider";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import React from "react";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <AuthProvider>

//     <RouterProvider router={router} />
//   </AuthProvider>
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
