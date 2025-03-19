
import React from "react";
import MatchCard, { MatchCardProps } from "./MatchCard";
import { cn } from "@/lib/utils";

interface MatchListProps {
  title: string;
  matches: MatchCardProps[];
  className?: string;
}

const MatchList: React.FC<MatchListProps> = ({ 
  title, 
  matches,
  className
}) => {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium tracking-tight">{title}</h2>
        {matches.length > 3 && (
          <button className="text-sm text-cricket-sky font-medium">
            View All
          </button>
        )}
      </div>

      <div className="space-y-4">
        {matches.length === 0 ? (
          <div className="rounded-lg border border-border/40 bg-card p-6 text-center">
            <p className="text-muted-foreground">No matches available</p>
          </div>
        ) : (
          matches.map((match, index) => (
            <div 
              key={match.id}
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MatchCard {...match} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MatchList;
