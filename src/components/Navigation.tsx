
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Calendar, BarChart2, Settings, Globe, Bell, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/context/AuthContext";

const Navigation: React.FC = () => {
  const location = useLocation();
  const { currentUser } = useAuth();
  
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/local-matches", label: "Local", icon: Calendar },
    { path: "/international-matches", label: "Global", icon: Globe },
    { path: "/notifications", label: "Alerts", icon: Bell },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  // Add admin link if user is logged in
  if (currentUser) {
    navItems.push({ path: "/admin", label: "Admin", icon: Shield });
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass-effect border-t border-border/50 px-6 py-4 bg-background">
      <div className="max-w-md mx-auto">
        <ul className="flex items-center justify-between">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
                           (item.path !== "/" && location.pathname.startsWith(item.path));
            const Icon = item.icon;
            
            return (
              <li key={item.path} className="relative">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => 
                    cn(
                      "flex flex-col items-center justify-center p-2 transition-colors duration-200 rounded-lg",
                      isActive ? "text-cricket-sky" : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  <div 
                    className={cn(
                      "relative transition-all duration-200 p-2 rounded-full",
                      isActive && "bg-cricket-sky/10"
                    )}
                  >
                    <Icon className={cn(
                      "w-5 h-5 transition-all duration-200",
                      isActive && "animate-bounce-subtle"
                    )} />
                    
                    {isActive && (
                      <span className="absolute bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cricket-sky rounded-full" />
                    )}
                  </div>
                  
                  <span className={cn(
                    "text-xs mt-1 font-medium transition-all duration-200",
                    isActive ? "opacity-100" : "opacity-70"
                  )}>
                    {item.label}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
