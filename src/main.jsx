import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Blogs from "./sections/Blogs.jsx";
import BlogPostPage from "./sections/BlogPostPage.jsx";
import Newsletters from "./sections/Newsletters.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/blogs", element: <Blogs /> },
  { path: "/blogs/:id", element: <BlogPostPage /> },
  { path: "/newsletters", element: <Newsletters /> },
  { path: "/newsletters/:id", element: <BlogPostPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
