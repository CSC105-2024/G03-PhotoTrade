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
import ScrollToTop from "./hooks/use-scroll";
import ProtectRoute from "./routes/protect-route";
import { ThemeProvider } from "@/components/theme-provider";

const App = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ScrollToTop />
        <Layout>{useRoutes(routes)}</Layout>
        {/* {useRoutes(routes)} */}
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
