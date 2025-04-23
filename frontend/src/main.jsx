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
import { ScrollToTop } from "./hooks/use-scrollto";
import ProtectRoute from "./routes/protect-route";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  let isLayout = <Layout>{useRoutes(routes)}</Layout>
  
  if (currentPath === "/user/unauth/login" || currentPath === "/user/unauth/register" || currentPath === "/user/unauth/forgetpassword") {
    isLayout = useRoutes(routes)
  }

  if (matchPath("/user/auth/dashboard/:id", currentPath) || currentPath === "/user/auth/edit") {
    isLayout = <ProtectRoute><Layout>{useRoutes(routes)}</Layout></ProtectRoute>
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ScrollToTop />
        {isLayout}
      </ThemeProvider>
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
