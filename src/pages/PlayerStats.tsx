
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line } from "recharts";

const PlayerStats = () => {
  const { id } = useParams();
  
  // Mock player data
  const playerInfo = {
    id: id || "1",
    name: "Virat Kohli",
    team: "India",
    role: "Batsman",
    age: 34,
    batting: {
      matches: 102,
      innings: 94,
      runs: 4008,
      average: 52.74,
      strikeRate: 137.96,
      fifties: 37,
      hundreds: 1,
      highestScore: 122,
      fours: 356,
      sixes: 118,
    },
    lastFiveScores: [
      { match: "vs ENG", score: 82, balls: 53 },
      { match: "vs AUS", score: 43, balls: 29 },
      { match: "vs SA", score: 67, balls: 42 },
      { match: "vs NZ", score: 11, balls: 8 },
      { match: "vs SL", score: 55, balls: 37 }
    ],
    tournamentPerformance: [
      { tournament: "T20 WC 2022", matches: 6, runs: 296, avg: 49.33, sr: 136.41 },
      { tournament: "Asia Cup 2022", matches: 5, runs: 276, avg: 92.00, sr: 147.59 },
      { tournament: "IPL 2023", matches: 14, runs: 639, avg: 53.25, sr: 139.82 },
      { tournament: "T20 WC 2021", matches: 5, runs: 168, avg: 56.00, sr: 151.35 }
    ],
    yearWiseStats: [
      { year: "2019", matches: 10, runs: 466, avg: 77.66 },
      { year: "2020", matches: 8, runs: 302, avg: 43.14 },
      { year: "2021", matches: 16, runs: 536, avg: 48.72 },
      { year: "2022", matches: 20, runs: 781, avg: 55.78 },
      { year: "2023", matches: 15, runs: 622, avg: 51.83 }
    ],
    recentMatches: [
      { 
        opponent: "England", 
        date: "Jun 10, 2023", 
        venue: "Lord's, London", 
        runs: 82, 
        balls: 53, 
        fours: 7, 
        sixes: 4, 
        strikeRate: 154.72 
      },
      { 
        opponent: "Australia", 
        date: "Jun 5, 2023", 
        venue: "Sydney", 
        runs: 43, 
        balls: 29, 
        fours: 5, 
        sixes: 1, 
        strikeRate: 148.28 
      },
      { 
        opponent: "South Africa", 
        date: "May 29, 2023", 
        venue: "Johannesburg", 
        runs: 67, 
        balls: 42, 
        fours: 6, 
        sixes: 3, 
        strikeRate: 159.52 
      },
      { 
        opponent: "New Zealand", 
        date: "May 22, 2023", 
        venue: "Auckland", 
        runs: 11, 
        balls: 8, 
        fours: 2, 
        sixes: 0, 
        strikeRate: 137.50 
      }
    ]
  };

  // Chart data
  const scoreData = [
    { match: 1, runs: 82 },
    { match: 2, runs: 43 },
    { match: 3, runs: 67 },
    { match: 4, runs: 11 },
    { match: 5, runs: 55 },
    { match: 6, runs: 23 },
    { match: 7, runs: 77 },
    { match: 8, runs: 34 },
    { match: 9, runs: 82 },
    { match: 10, runs: 44 }
  ];
  
  const yearlyData = playerInfo.yearWiseStats.map(stat => ({
    year: stat.year,
    runs: stat.runs,
    average: stat.avg
  }));

  return (
    <Layout title="Player Stats" showNav={true}>
      <div className="pt-2 pb-20">
        <Card className="mb-4 overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-cricket-sky/10 p-4 flex items-center">
              <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mr-4">
                <span className="text-2xl font-bold">{playerInfo.name.charAt(0)}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">{playerInfo.name}</h2>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{playerInfo.team}</span>
                  <span className="mx-2">•</span>
                  <span>{playerInfo.role}</span>
                  <span className="mx-2">•</span>
                  <span>{playerInfo.age} years</span>
                </div>
                <div className="mt-2 flex space-x-3">
                  <div>
                    <p className="text-xs text-muted-foreground">Matches</p>
                    <p className="font-medium">{playerInfo.batting.matches}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Runs</p>
                    <p className="font-medium">{playerInfo.batting.runs}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Average</p>
                    <p className="font-medium">{playerInfo.batting.average}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Strike Rate</p>
                    <p className="font-medium">{playerInfo.batting.strikeRate}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="batting" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="batting" className="flex-1">Batting</TabsTrigger>
            <TabsTrigger value="matches" className="flex-1">Matches</TabsTrigger>
            <TabsTrigger value="trends" className="flex-1">Trends</TabsTrigger>
            <TabsTrigger value="tournaments" className="flex-1">Tournaments</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-300px)]">
            <TabsContent value="batting" className="mt-0 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Batting Summary</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Innings</p>
                      <p className="font-medium">{playerInfo.batting.innings}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Runs</p>
                      <p className="font-medium">{playerInfo.batting.runs}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Average</p>
                      <p className="font-medium">{playerInfo.batting.average}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">SR</p>
                      <p className="font-medium">{playerInfo.batting.strikeRate}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">50s</p>
                      <p className="font-medium">{playerInfo.batting.fifties}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">100s</p>
                      <p className="font-medium">{playerInfo.batting.hundreds}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">4s</p>
                      <p className="font-medium">{playerInfo.batting.fours}</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">6s</p>
                      <p className="font-medium">{playerInfo.batting.sixes}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Recent Form</h3>
                  <div className="flex items-center justify-between mb-3">
                    {playerInfo.lastFiveScores.map((score, index) => (
                      <div key={index} className="text-center">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${score.score > 50 ? 'bg-cricket-grass text-white' : 'bg-muted'}`}>
                          {score.score}
                        </div>
                        <p className="text-xs mt-1">{score.match}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-60">
                    <ChartContainer 
                      config={{ 
                        runs: { color: "#9b87f5" }
                      }}
                    >
                      <LineChart data={scoreData}>
                        <XAxis dataKey="match" />
                        <YAxis />
                        <Line type="monotone" dataKey="runs" stroke="#9b87f5" strokeWidth={2} dot={{ r: 4 }} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </LineChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="matches" className="mt-0">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Recent Matches</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Opponent</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead className="text-right">Runs</TableHead>
                          <TableHead className="text-right">Balls</TableHead>
                          <TableHead className="text-right">4s</TableHead>
                          <TableHead className="text-right">6s</TableHead>
                          <TableHead className="text-right">SR</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {playerInfo.recentMatches.map((match, index) => (
                          <TableRow key={index}>
                            <TableCell>{match.opponent}</TableCell>
                            <TableCell>{match.date}</TableCell>
                            <TableCell className="text-right font-medium">{match.runs}</TableCell>
                            <TableCell className="text-right">{match.balls}</TableCell>
                            <TableCell className="text-right">{match.fours}</TableCell>
                            <TableCell className="text-right">{match.sixes}</TableCell>
                            <TableCell className="text-right">{match.strikeRate}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="trends" className="mt-0 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Year-wise Performance</h3>
                  <div className="h-60">
                    <ChartContainer 
                      config={{ 
                        runs: { color: "#9b87f5" }, 
                        average: { color: "#f97316" }
                      }}
                    >
                      <BarChart data={yearlyData}>
                        <XAxis dataKey="year" />
                        <YAxis yAxisId="left" orientation="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Bar yAxisId="left" dataKey="runs" fill="#9b87f5" name="Runs" />
                        <Line yAxisId="right" type="monotone" dataKey="average" stroke="#f97316" name="Average" />
                        <ChartTooltip content={<ChartTooltipContent />} />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Stat Breakdown</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Average vs Pace</p>
                      <p className="font-medium">56.32</p>
                      <div className="w-full bg-background rounded-full h-2 mt-2">
                        <div className="bg-cricket-sky h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Average vs Spin</p>
                      <p className="font-medium">48.71</p>
                      <div className="w-full bg-background rounded-full h-2 mt-2">
                        <div className="bg-cricket-sky h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Boundary %</p>
                      <p className="font-medium">16.2%</p>
                      <div className="w-full bg-background rounded-full h-2 mt-2">
                        <div className="bg-cricket-grass h-2 rounded-full" style={{ width: "58%" }}></div>
                      </div>
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <p className="text-xs text-muted-foreground mb-1">Dot Ball %</p>
                      <p className="font-medium">31.8%</p>
                      <div className="w-full bg-background rounded-full h-2 mt-2">
                        <div className="bg-cricket-live h-2 rounded-full" style={{ width: "40%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="tournaments" className="mt-0">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Tournament Performance</h3>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Tournament</TableHead>
                          <TableHead className="text-right">Matches</TableHead>
                          <TableHead className="text-right">Runs</TableHead>
                          <TableHead className="text-right">Average</TableHead>
                          <TableHead className="text-right">Strike Rate</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {playerInfo.tournamentPerformance.map((tournament, index) => (
                          <TableRow key={index}>
                            <TableCell>{tournament.tournament}</TableCell>
                            <TableCell className="text-right">{tournament.matches}</TableCell>
                            <TableCell className="text-right font-medium">{tournament.runs}</TableCell>
                            <TableCell className="text-right">{tournament.avg}</TableCell>
                            <TableCell className="text-right">{tournament.sr}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </Layout>
  );
};

export default PlayerStats;
