import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "~react-pages";
import { BrowserRouter, matchPath, useLocation, useRoutes } from "react-router-dom";
import Layout from "@/components/layouts/root-layout";
import { Provider } from "react-redux";
import store from "@/store";
import ScrollToTop from "./hooks/scoll-to-top";

const App = () => {
  const location = useLocation();
  const currentPath = (location.pathname);
  const path = ['/', '/market'];

  const isLayoutRoute =
    path.includes(currentPath) ||
    matchPath("/market/:id", currentPath);

  return (
    <>
      <ScrollToTop />
      {isLayoutRoute ? (
        <Layout>{useRoutes(routes)}</Layout>
      ) : (
        useRoutes(routes)
      )}
    </>
  )
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
