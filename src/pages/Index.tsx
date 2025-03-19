
import React from "react";
import Layout from "@/components/Layout";
import MatchList from "@/components/MatchList";
import { MatchCardProps } from "@/components/MatchCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import LiveIndicator from "@/components/LiveIndicator";

const Index = () => {
  // Mock data for live matches
  const liveMatches: MatchCardProps[] = [
    {
      id: "1",
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
      id: "2",
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

  // Mock data for upcoming matches
  const upcomingMatches: MatchCardProps[] = [
    {
      id: "3",
      teams: [
        {
          name: "India",
          shortName: "IND"
        },
        {
          name: "Australia",
          shortName: "AUS"
        }
      ],
      type: "international",
      format: "ODI",
      status: "upcoming",
      venue: "Melbourne Cricket Ground",
      time: "Tomorrow, 2:30 PM",
    },
    {
      id: "4",
      teams: [
        {
          name: "England",
          shortName: "ENG"
        },
        {
          name: "South Africa",
          shortName: "SA"
        }
      ],
      type: "international",
      format: "Test",
      status: "upcoming",
      venue: "Lord's Cricket Ground",
      time: "Jun 20, 3:00 PM",
    }
  ];

  // Mock data for recent matches
  const recentMatches: MatchCardProps[] = [
    {
      id: "5",
      teams: [
        {
          name: "Pakistan",
          shortName: "PAK",
          score: 287,
          wickets: 10,
          overs: 48.5
        },
        {
          name: "New Zealand",
          shortName: "NZ",
          score: 290,
          wickets: 5,
          overs: 46.3
        }
      ],
      type: "international",
      format: "ODI",
      status: "completed",
      venue: "Karachi National Stadium",
      time: "Yesterday",
      result: "New Zealand won by 5 wickets"
    },
    {
      id: "6",
      teams: [
        {
          name: "West Indies",
          shortName: "WI",
          score: 156,
          wickets: 10,
          overs: 19.4
        },
        {
          name: "Sri Lanka",
          shortName: "SL",
          score: 157,
          wickets: 3,
          overs: 17.2
        }
      ],
      type: "international",
      format: "T20",
      status: "completed",
      venue: "Bridgetown",
      time: "2 days ago",
      result: "Sri Lanka won by 7 wickets"
    }
  ];

  return (
    <Layout title="Cricket Scores" showNav={true}>
      <div className="pt-4">
        <Card className="bg-cricket-pitch rounded-xl border-none mb-6">
          <CardContent className="p-4">
            <div className="flex items-center mb-2">
              <LiveIndicator withText={true} size="sm" className="mr-2" />
              <h3 className="text-sm font-medium">Featured Match</h3>
            </div>
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="font-bold text-lg">IND</span>
                </div>
                <div className="ml-3">
                  <p className="font-semibold">India</p>
                  <p className="text-lg font-bold">267-5 (43.2)</p>
                </div>
              </div>
              
              <div className="mx-4 text-center">
                <div className="px-3 py-1 rounded-full bg-cricket-sky/10 text-cricket-sky text-xs font-medium mb-1">
                  ODI
                </div>
                <div className="text-xs">
                  RRR: 6.2
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-3 text-right">
                  <p className="font-semibold">England</p>
                  <p className="text-lg font-bold">224-4 (38.0)</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <span className="font-bold text-lg">ENG</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="live" className="flex-1">Live</TabsTrigger>
            <TabsTrigger value="upcoming" className="flex-1">Upcoming</TabsTrigger>
            <TabsTrigger value="completed" className="flex-1">Completed</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-260px)]">
            <TabsContent value="all" className="mt-0 space-y-6">
              <MatchList title="Live Matches" matches={liveMatches} />
              <MatchList title="Upcoming Matches" matches={upcomingMatches} />
              <MatchList title="Recent Matches" matches={recentMatches} />
            </TabsContent>
            
            <TabsContent value="live" className="mt-0">
              <MatchList title="Live Matches" matches={liveMatches} />
            </TabsContent>
            
            <TabsContent value="upcoming" className="mt-0">
              <MatchList title="Upcoming Matches" matches={upcomingMatches} />
            </TabsContent>
            
            <TabsContent value="completed" className="mt-0">
              <MatchList title="Recent Matches" matches={recentMatches} />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Index;
