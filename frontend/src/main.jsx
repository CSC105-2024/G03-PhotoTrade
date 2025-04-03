import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "~react-pages";
import { BrowserRouter, useLocation, useRoutes } from "react-router-dom";
import Layout from "@/components/layouts/root-layout";
import { Provider } from "react-redux";
import store from "@/store";

const App = () => {
  const location = useLocation();
  const path = ["/", "/market", "/market/detail"];

  if (path.includes(location.pathname)) {
    return <Layout>{useRoutes(routes)}</Layout>;
  }
  return useRoutes(routes);
};

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
);
