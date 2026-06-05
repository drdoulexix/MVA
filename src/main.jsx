import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./aboutUs.jsx";
import Awards from "./awards.jsx";
import Stardom from "./stardom.jsx";
import Nominate from "./nominate.jsx";
import Sponsors from "./sponsors.jsx";
import Gallery from "./gallery.jsx";
import ContactUs from "./contact.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/awards", element: <Awards /> },
  { path: "/stardom", element: <Stardom /> },
  { path: "/nominate", element: <Nominate /> },
  { path: "/sponsors", element: <Sponsors /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <ContactUs /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
