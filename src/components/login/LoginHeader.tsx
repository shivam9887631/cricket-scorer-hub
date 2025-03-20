
import React from "react";
import { ChevronRight } from "lucide-react";

interface LoginHeaderProps {
  title: string;
  subtitle: string;
}

const LoginHeader = ({ title, subtitle }: LoginHeaderProps) => {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 rounded-full bg-cricket-sky/10 flex items-center justify-center mx-auto mb-4">
        <div className="w-10 h-10 rounded-full bg-cricket-sky text-white flex items-center justify-center">
          <ChevronRight className="h-6 w-6" />
        </div>
      </div>
      <h1 className="text-2xl font-bold">Crickify</h1>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
};

export default LoginHeader;
