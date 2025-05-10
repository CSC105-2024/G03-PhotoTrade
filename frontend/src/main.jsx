import { StrictMode, useEffect } from "react";
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
import { ThemeProvider } from "@/hooks/theme-provider";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./reducer/auth";

const App = () => {
  const route = useRoutes(routes);
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchUser());
    }
  }, [dispatch, isAuthenticated]);

  let isLayout = <Layout>{route}</Layout>;

  if (
    currentPath === "/user/unauth/login" ||
    currentPath === "/user/unauth/register" ||
    currentPath === "/user/unauth/forgetpassword"
  ) {
    isLayout = route;
  }

  if (
    currentPath === "/user/auth/dashboard" ||
    currentPath === "/user/auth/edit"
  ) {
    isLayout = (
      <ProtectRoute>
        <Layout>{route}</Layout>
      </ProtectRoute>
    );
  }

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        {ScrollToTop()}
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
  </Provider>,
);
