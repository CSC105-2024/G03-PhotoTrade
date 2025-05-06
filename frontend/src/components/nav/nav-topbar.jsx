import { navLinks } from "@/constants";
import { useState, useEffect } from "react";
import styles from "@/style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser, LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/theme-provider";
import { ScrollToBottom } from "@/hooks/use-scrollto";
import { logout, fetchUser } from "@/reducer/auth";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { setTheme } = useTheme();

  const [active, setActive] = useState(location.pathname);
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // if (isAuthenticated) {
    //   dispatch(fetchUser());
    // }
    dispatch(fetchUser());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handleLinkClick = (item) => {
    if (item.id === "footer") {
      setActive("/footer");
      ScrollToBottom();
    } else {
      setActive(location.pathname);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="container mx-auto md:text-sm">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/" className="text-xl font-bold" onClick={() => setActive("/")}>
              PhotoTrade
            </Link>
          </motion.div>

          <ul className="hidden space-x-6 md:flex">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer ${styles.underEffect} ${
                  active === `/${item.id}` ? "dark:text-white" : "text-neutral-500"
                }`}
                onClick={() => handleLinkClick(item)}
              >
                <Link to={item.id === "footer" ? "#" : `/${item.id}`}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-2">
            {/* Theme Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="hidden rounded-full md:flex">
                  <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] text-white transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Authenticated */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="hidden rounded-full md:flex">
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <Link to={`user/auth/dashboard/${userInfo.id}`}>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className={`${styles.bgCustom} hidden py-2 px-3 md:flex dark:text-white`}
                onClick={() => navigate("/user/unauth/login")}
              >
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
