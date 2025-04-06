import { navLinks } from "@/constants";
import { useState, useEffect, act } from "react";
import styles from "@/style";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser, LogOut } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <nav>
      <div className="container relative md:text-sm mx-auto z-10">
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
                className={`cursor-pointer ${styles.underEffect} ${active === `/${item.id}` ? "text-white" : " text-neutral-500"}`}
              >
                <Link
                  to={`/${item.id}`}
                  aria-current={active === `/${item.id}` ? "pages" : undefined}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

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

                <Link to={"user/auth/dashboard"}>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>

                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <button
              className={`${styles.bgCustom} text-sm py-2 px-3 rounded-md hidden md:flex justify-center space-x-12 items-center cursor-pointer hover:opacity-90`}
              onClick={() => navigate("/user/unauth/login")}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
