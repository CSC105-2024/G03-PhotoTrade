import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import routes from "~react-pages";
import {
  BrowserRouter,
  matchPath,
  useLocation,
  useRoutes,
} from "react-router-dom";
import Layout from "@/components/layouts/root-layout";
import { Provider } from "react-redux";
import store from "@/store";
import ScrollToTop from "./hooks/scoll-to-top";
import ProtectRoute from "./routes/protect-route";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const path = ["/", "/market", "/profile/profile"];

  const isProtectedRoute =
    currentPath === "/user/auth" || matchPath("user/auth/:id", currentPath);

  const protectedElement = isProtectedRoute ? 
    (<ProtectRoute>{useRoutes(routes)}</ProtectRoute>) :
    (useRoutes(routes));

  const isLayoutRoute =
    path.includes(currentPath) || matchPath("/market/:id", currentPath);

  return (
    <>
      <ScrollToTop />
      {isLayoutRoute ? <Layout>{useRoutes(routes)}</Layout> : protectedElement}
    </>
  );
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
