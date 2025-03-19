
import React, { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  showNav = true 
}) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {title && (
        <header className="w-full z-10 px-6 py-6 flex items-center justify-between animate-slide-in">
          <h1 className="text-2xl font-medium tracking-tight">{title}</h1>
        </header>
      )}
      
      <main className="flex-1 overflow-hidden px-6 pb-24">
        {children}
      </main>
      
      {showNav && <Navigation />}
    </div>
  );
};

export default Layout;
