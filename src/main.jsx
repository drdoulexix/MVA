import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutUs from "./aboutUs.jsx";
import Awards from "./awards.jsx";
import Stardom from "./riseToFame.jsx";
import Nominate from "./nominate.jsx";
import Sponsors from "./sponsors.jsx";
import Gallery from "./gallery.jsx";
import ContactUs from "./contact.jsx";
import PrivacyPolicy from "./privacyPolicy.jsx";
import Register from "./register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/awards", element: <Awards /> },
  { path: "/riseToFame", element: <Stardom /> },
  { path: "/nominate", element: <Nominate /> },
  { path: "/sponsors", element: <Sponsors /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/register", element: <Register /> },
  { path: "/privacyPolicy", element: <PrivacyPolicy /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
