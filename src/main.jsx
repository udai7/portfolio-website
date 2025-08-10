import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Blogs from "./sections/Blogs.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/blogs", element: <Blogs /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
