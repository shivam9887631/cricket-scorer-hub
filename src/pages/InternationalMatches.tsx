
import React from "react";
import Layout from "@/components/Layout";
import MatchList from "@/components/MatchList";
import { MatchCardProps } from "@/components/MatchCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InternationalMatches = () => {
  // Mock data for international matches
  const liveIntlMatches: MatchCardProps[] = [
    {
      id: "intl1",
      teams: [
        {
          name: "India",
          shortName: "IND",
          score: 267,
          wickets: 5,
          overs: 43.2
        },
        {
          name: "England",
          shortName: "ENG",
          score: 224,
          wickets: 4,
          overs: 38.0
        }
      ],
      type: "international",
      format: "ODI",
      status: "live",
      venue: "Lords, London",
      time: "In Progress",
    },
    {
      id: "intl2",
      teams: [
        {
          name: "Australia",
          shortName: "AUS",
          score: 165,
          wickets: 3,
          overs: 15.4
        },
        {
          name: "New Zealand",
          shortName: "NZ"
        }
      ],
      type: "international",
      format: "T20",
      status: "live",
      venue: "Sydney Cricket Ground",
      time: "In Progress",
    }
  ];

  const upcomingIntlMatches: MatchCardProps[] = [
    {
      id: "intl3",
      teams: [
        {
          name: "South Africa",
          shortName: "SA"
        },
        {
          name: "Pakistan",
          shortName: "PAK"
        }
      ],
      type: "international",
      format: "Test",
      status: "upcoming",
      venue: "Johannesburg",
      time: "Tomorrow, 10:00 AM",
    },
    {
      id: "intl4",
      teams: [
        {
          name: "West Indies",
          shortName: "WI"
        },
        {
          name: "Sri Lanka",
          shortName: "SL"
        }
      ],
      type: "international",
      format: "ODI",
      status: "upcoming",
      venue: "Barbados",
      time: "Jun 22, 7:30 PM",
    }
  ];

  const recentIntlMatches: MatchCardProps[] = [
    {
      id: "intl5",
      teams: [
        {
          name: "Bangladesh",
          shortName: "BAN",
          score: 312,
          wickets: 8,
          overs: 50
        },
        {
          name: "Zimbabwe",
          shortName: "ZIM",
          score: 258,
          wickets: 10,
          overs: 46.4
        }
      ],
      type: "international",
      format: "ODI",
      status: "completed",
      venue: "Dhaka",
      time: "Yesterday",
      result: "Bangladesh won by 54 runs"
    },
    {
      id: "intl6",
      teams: [
        {
          name: "Ireland",
          shortName: "IRE",
          score: 189,
          wickets: 9,
          overs: 20
        },
        {
          name: "Scotland",
          shortName: "SCO",
          score: 156,
          wickets: 10,
          overs: 18.3
        }
      ],
      type: "international",
      format: "T20",
      status: "completed",
      venue: "Dublin",
      time: "3 days ago",
      result: "Ireland won by 33 runs"
    }
  ];

  return (
    <Layout title="International Matches" showNav={true}>
      <div className="pt-2 pb-6">
        <Card className="mb-4">
          <CardContent className="p-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input 
                type="text" 
                placeholder="Search international matches..."
                className="w-full pl-9 pr-4 py-2 rounded-md bg-muted text-sm"
              />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
            <TabsTrigger value="odi" className="flex-1">ODI</TabsTrigger>
            <TabsTrigger value="t20" className="flex-1">T20</TabsTrigger>
            <TabsTrigger value="test" className="flex-1">Test</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-220px)]">
            <TabsContent value="all" className="mt-0 space-y-6">
              <MatchList title="Live Matches" matches={liveIntlMatches} />
              <MatchList title="Upcoming Matches" matches={upcomingIntlMatches} />
              <MatchList title="Recent Matches" matches={recentIntlMatches} />
            </TabsContent>
            
            <TabsContent value="odi" className="mt-0 space-y-6">
              <MatchList title="Live Matches" matches={liveIntlMatches.filter(match => match.format === 'ODI')} />
              <MatchList title="Upcoming Matches" matches={upcomingIntlMatches.filter(match => match.format === 'ODI')} />
              <MatchList title="Recent Matches" matches={recentIntlMatches.filter(match => match.format === 'ODI')} />
            </TabsContent>
            
            <TabsContent value="t20" className="mt-0 space-y-6">
              <MatchList title="Live Matches" matches={liveIntlMatches.filter(match => match.format === 'T20')} />
              <MatchList title="Upcoming Matches" matches={upcomingIntlMatches.filter(match => match.format === 'T20')} />
              <MatchList title="Recent Matches" matches={recentIntlMatches.filter(match => match.format === 'T20')} />
            </TabsContent>
            
            <TabsContent value="test" className="mt-0 space-y-6">
              <MatchList title="Live Matches" matches={liveIntlMatches.filter(match => match.format === 'Test')} />
              <MatchList title="Upcoming Matches" matches={upcomingIntlMatches.filter(match => match.format === 'Test')} />
              <MatchList title="Recent Matches" matches={recentIntlMatches.filter(match => match.format === 'Test')} />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </Layout>
  );
};

export default InternationalMatches;
