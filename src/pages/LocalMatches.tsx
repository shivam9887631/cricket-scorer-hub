
import React from "react";
import Layout from "@/components/Layout";
import MatchList from "@/components/MatchList";
import { MatchCardProps } from "@/components/MatchCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const LocalMatches = () => {
  // Mock data for local matches
  const liveLocalMatches: MatchCardProps[] = [
    {
      id: "local1",
      teams: [
        {
          name: "Mumbai Tigers",
          shortName: "MUM",
          score: 187,
          wickets: 4,
          overs: 18.2
        },
        {
          name: "Delhi Dragons",
          shortName: "DEL",
          score: 156,
          wickets: 6,
          overs: 16.3
        }
      ],
      type: "local",
      format: "T20",
      status: "live",
      venue: "Mumbai Cricket Ground",
      time: "In Progress",
    },
    {
      id: "local2",
      teams: [
        {
          name: "Chennai Kings",
          shortName: "CHE",
          score: 212,
          wickets: 5,
          overs: 20
        },
        {
          name: "Bangalore Lions",
          shortName: "BAN",
          score: 198,
          wickets: 7,
          overs: 19.2
        }
      ],
      type: "local",
      format: "T20",
      status: "live",
      venue: "Chennai Stadium",
      time: "In Progress",
    }
  ];

  const upcomingLocalMatches: MatchCardProps[] = [
    {
      id: "local3",
      teams: [
        {
          name: "Kolkata Knights",
          shortName: "KOL"
        },
        {
          name: "Rajasthan Royals",
          shortName: "RAJ"
        }
      ],
      type: "local",
      format: "T20",
      status: "upcoming",
      venue: "Eden Gardens",
      time: "Tomorrow, 4:00 PM",
    },
    {
      id: "local4",
      teams: [
        {
          name: "Hyderabad Suns",
          shortName: "HYD"
        },
        {
          name: "Punjab Kings",
          shortName: "PUN"
        }
      ],
      type: "local",
      format: "Local",
      status: "upcoming",
      venue: "Hyderabad Stadium",
      time: "Jun 21, 5:30 PM",
    }
  ];

  const recentLocalMatches: MatchCardProps[] = [
    {
      id: "local5",
      teams: [
        {
          name: "Gujarat Titans",
          shortName: "GUJ",
          score: 174,
          wickets: 8,
          overs: 20
        },
        {
          name: "Lucknow Giants",
          shortName: "LUC",
          score: 175,
          wickets: 4,
          overs: 18.3
        }
      ],
      type: "local",
      format: "T20",
      status: "completed",
      venue: "Ahmedabad Stadium",
      time: "Yesterday",
      result: "Lucknow Giants won by 6 wickets"
    },
    {
      id: "local6",
      teams: [
        {
          name: "Jaipur Jaguars",
          shortName: "JAI",
          score: 143,
          wickets: 10,
          overs: 19.1
        },
        {
          name: "Kochi Tuskers",
          shortName: "KOC",
          score: 144,
          wickets: 7,
          overs: 19.4
        }
      ],
      type: "local",
      format: "Local",
      status: "completed",
      venue: "Jaipur Cricket Ground",
      time: "2 days ago",
      result: "Kochi Tuskers won by 3 wickets"
    }
  ];

  return (
    <Layout title="Local Matches" showNav={true}>
      <div className="pt-2 pb-6">
        <Card className="mb-4">
          <CardContent className="p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search local matches..."
                className="w-full pl-9 pr-4 py-2 rounded-md bg-muted text-sm"
              />
            </div>
          </CardContent>
        </Card>

        <ScrollArea className="h-[calc(100vh-180px)]">
          <div className="space-y-6">
            <MatchList title="Live Matches" matches={liveLocalMatches} />
            <MatchList title="Upcoming Matches" matches={upcomingLocalMatches} />
            <MatchList title="Recent Matches" matches={recentLocalMatches} />
          </div>
        </ScrollArea>
      </div>
    </Layout>
  );
};

export default LocalMatches;
