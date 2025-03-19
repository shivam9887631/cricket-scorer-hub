
import React from "react";
import { cn } from "@/lib/utils";
import LiveIndicator from "./LiveIndicator";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export interface TeamScore {
  name: string;
  shortName: string;
  logo?: string;
  score?: number;
  wickets?: number;
  overs?: number;
}

export interface MatchCardProps {
  id: string;
  teams: [TeamScore, TeamScore];
  type: "international" | "local";
  format: "T20" | "ODI" | "Test" | "Local";
  status: "live" | "upcoming" | "completed";
  venue: string;
  time: string;
  result?: string;
  className?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  id,
  teams,
  type,
  format,
  status,
  venue,
  time,
  result,
  className,
}) => {
  const isLive = status === "live";
  const isUpcoming = status === "upcoming";
  
  return (
    <Link
      to={`/match/${id}`}
      className={cn(
        "group relative block w-full rounded-2xl border border-border/40 overflow-hidden transition-all duration-300 hover:border-cricket-sky/30 bg-card",
        isLive && "ring-1 ring-cricket-live/20",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-cricket-sky/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Match info chip */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        {isLive && <LiveIndicator size="sm" />}
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
          {format}
        </span>
      </div>

      <div className="p-5">
        {/* Teams */}
        <div className="space-y-4">
          {teams.map((team, index) => (
            <div key={team.name} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0 overflow-hidden">
                  {team.logo ? (
                    <img 
                      src={team.logo} 
                      alt={team.name} 
                      className="w-full h-full object-cover image-fade-in" 
                    />
                  ) : (
                    <span className="text-sm font-medium">{team.shortName}</span>
                  )}
                </div>
                <span className="font-medium truncate max-w-[100px]">{team.name}</span>
              </div>
              
              {isUpcoming ? (
                <div></div>
              ) : (
                <div className="text-right">
                  <span className="font-medium">
                    {team.score !== undefined && `${team.score}`}
                    {team.wickets !== undefined && `-${team.wickets}`}
                  </span>
                  {team.overs !== undefined && (
                    <span className="text-sm text-muted-foreground ml-1">
                      ({team.overs})
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Match details */}
        <div className="mt-4 pt-4 border-t border-border/40 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{venue}</p>
            <p className="text-xs font-medium">{time}</p>
          </div>
          
          {result ? (
            <p className="text-xs font-medium max-w-[120px] truncate text-right">{result}</p>
          ) : (
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-cricket-sky/10 transition-colors duration-200">
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cricket-sky transition-colors duration-200" />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MatchCard;
