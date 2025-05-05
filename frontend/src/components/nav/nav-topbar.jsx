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
import { logout } from "@/reducer/auth";

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

  return (
    <nav>
      <div className="container md:text-sm mx-auto">
        <div className="flex justify-between items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/"
              className="text-xl font-bold"
              onClick={() => {
                setActive("/");
              }}
            >
              PhotoTrade
            </Link>
          </motion.div>

          <ul className="space-x-6 md:flex hidden">
            {navLinks.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer ${styles.underEffect} 
                  ${active === `/${item.id}` ? "dark:text-white" : " text-neutral-500"}`
                }

                onClick={() => {
                  if (item.id === "footer") {
                    setActive('/footer');
                    ScrollToBottom();
                  } else {
                    setActive(location.pathname)
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                }}
              >
                <Link
                  to={item.id === "footer" ? "#" : `/${item.id}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full hidden md:flex"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-white" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full hidden md:flex"
                  >
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

                  <DropdownMenuItem
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                  >
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                className={`${styles.bgCustom} py-2 px-3 hidden md:flex dark:text-white`}
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
