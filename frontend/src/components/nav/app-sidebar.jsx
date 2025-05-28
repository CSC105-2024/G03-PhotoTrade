import {
  Home,
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  SquareTerminal,
  Bot,
  BookOpen,
  Settings2,
  Frame,
  PieChart,
  Map,
  Store,
  CircleUser,
  LogIn,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import NavUser from "./nav-user";
import { navLinks } from "@/constants";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ScrollToBottom } from "@/hooks/use-scrollto";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const items = [
  {
    title: "Home",
    url: "",
    icon: Home,
  },
  {
    title: "Market",
    url: "/market",
    icon: Store,
  },
  {
    title: "Contact",
    url: "/footer",
    icon: CircleUser,
  },
];

const AppSidebar = ({ ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const { isAuthenticated, userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  const handleLinkClick = (item) => {
    if (item.url === "/footer") {
      setActive("/footer");
      ScrollToBottom();
    } else {
      setActive(item.url === "" ? "/" : item.url);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSignInClick = () => {
    navigate("/user/unauth/login");
  };

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>PhotoTrade</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`${
                      active === (item.url === "" ? "/" : item.url) || 
                      (item.url === "/footer" && active === "/footer")
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : ""
                    }`}
                  >
                    {item.url === "/footer" ? (
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item);
                        }}
                        className="flex items-center cursor-pointer"
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        <span>{item.title}</span>
                      </a>
                    ) : (
                      <Link 
                        to={item.url} 
                        className="flex items-center"
                        onClick={() => handleLinkClick(item)}
                      >
                        <item.icon className="w-5 h-5 mr-2" />
                        <span>{item.title}</span>
                      </Link>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {isAuthenticated && userInfo ? (
          <NavUser user={{
            name: userInfo.name || "User",
            email: userInfo.email || "user@example.com",
            avatar: userInfo.avatar || "/avatars/default.jpg"
          }} />
        ) : (
          <div className="p-4">
            <Button
              onClick={handleSignInClick}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              variant="default"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;