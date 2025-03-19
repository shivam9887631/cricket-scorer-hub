
import React from "react";
import { cn } from "@/lib/utils";

interface LiveIndicatorProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  withText?: boolean;
}

const LiveIndicator: React.FC<LiveIndicatorProps> = ({ 
  className,
  size = "md",
  withText = false
}) => {
  const sizeClasses = {
    sm: "h-2 w-2",
    md: "h-3 w-3",
    lg: "h-4 w-4"
  };
  
  return (
    <div className={cn(
      "flex items-center gap-1.5",
      className
    )}>
      <span className={cn(
        "rounded-full bg-cricket-live animate-pulse-live",
        sizeClasses[size]
      )} />
      {withText && (
        <span className="text-xs font-medium text-cricket-live uppercase tracking-wide">
          Live
        </span>
      )}
    </div>
  );
};

export default LiveIndicator;
