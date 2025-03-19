
import React from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import LiveIndicator from "@/components/LiveIndicator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const MatchDetails = () => {
  const { id } = useParams();
  
  // Mock match data
  const matchInfo = {
    id: id,
    status: "live",
    format: "T20",
    venue: "Mumbai Cricket Ground",
    time: "In Progress",
    teams: [
      {
        name: "Mumbai Tigers",
        shortName: "MUM",
        score: 187,
        wickets: 4,
        overs: 18.2,
        players: [
          { name: "Rohit S", runs: 65, balls: 42, fours: 6, sixes: 3, strikeRate: 154.76 },
          { name: "Virat K", runs: 43, balls: 28, fours: 4, sixes: 2, strikeRate: 153.57 },
          { name: "Hardik P", runs: 32, balls: 18, fours: 2, sixes: 2, strikeRate: 177.78 },
          { name: "MS Dhoni", runs: 21, balls: 12, fours: 1, sixes: 2, strikeRate: 175.00 },
          { name: "Rishabh P", runs: 15, balls: 9, fours: 1, sixes: 1, strikeRate: 166.67 },
        ],
        bowlers: [
          { name: "Bumrah J", overs: 4, maidens: 0, runs: 22, wickets: 2, economy: 5.50 },
          { name: "Shami M", overs: 3.2, maidens: 0, runs: 35, wickets: 1, economy: 10.50 },
          { name: "Ashwin R", overs: 4, maidens: 0, runs: 28, wickets: 1, economy: 7.00 },
        ]
      },
      {
        name: "Delhi Dragons",
        shortName: "DEL",
        score: 156,
        wickets: 6,
        overs: 16.3,
        players: [
          { name: "Shikhar D", runs: 48, balls: 32, fours: 5, sixes: 1, strikeRate: 150.00 },
          { name: "KL Rahul", runs: 37, balls: 25, fours: 3, sixes: 2, strikeRate: 148.00 },
          { name: "Pant R", runs: 28, balls: 15, fours: 2, sixes: 2, strikeRate: 186.67 },
          { name: "Jadeja R", runs: 22, balls: 16, fours: 2, sixes: 1, strikeRate: 137.50 },
          { name: "Axar P", runs: 12, balls: 8, fours: 1, sixes: 0, strikeRate: 150.00 },
        ],
        bowlers: [
          { name: "Chahal Y", overs: 4, maidens: 0, runs: 32, wickets: 2, economy: 8.00 },
          { name: "Bhuvneshwar", overs: 4, maidens: 0, runs: 29, wickets: 1, economy: 7.25 },
          { name: "Kuldeep Y", overs: 3, maidens: 0, runs: 34, wickets: 1, economy: 11.33 },
        ]
      }
    ],
    runRate: 9.82,
    requiredRunRate: 11.34,
    commentary: [
      { over: "16.3", description: "FOUR! Pant pulls the short ball to the boundary" },
      { over: "16.2", description: "Single taken, rotates the strike" },
      { over: "16.1", description: "Good length delivery, defended back to the bowler" },
      { over: "15.6", description: "SIX! Massive hit over long-on!" },
      { over: "15.5", description: "Dot ball, good yorker" },
      { over: "15.4", description: "Wide ball, poor delivery" },
      { over: "15.3", description: "Two runs taken with quick running" },
      { over: "15.2", description: "FOUR! Beautiful cover drive" },
      { over: "15.1", description: "Dot ball, beaten outside edge" },
    ]
  };

  // Mock data for run chart
  const runData = [
    { over: '1-6', MUM: 52, DEL: 49 },
    { over: '7-12', MUM: 58, DEL: 53 },
    { over: '13-16', MUM: 47, DEL: 39 },
    { over: '17-20', MUM: 30, DEL: 15 },
  ];

  return (
    <Layout showNav={true}>
      <div className="pt-2 pb-20">
        <Card className="bg-cricket-pitch rounded-xl border-none mb-4 overflow-hidden">
          <CardContent className="p-4 relative">
            {matchInfo.status === "live" && (
              <div className="absolute top-3 right-3">
                <LiveIndicator withText={true} size="sm" />
              </div>
            )}
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-1">
                  <span className="font-bold text-xl">{matchInfo.teams[0].shortName}</span>
                </div>
                <span className="text-sm font-medium">{matchInfo.teams[0].name}</span>
                <span className="text-lg font-bold mt-1">
                  {matchInfo.teams[0].score}-{matchInfo.teams[0].wickets} ({matchInfo.teams[0].overs})
                </span>
              </div>
              
              <div className="mx-4 text-center">
                <div className="px-3 py-1 rounded-full bg-cricket-sky/10 text-cricket-sky text-xs font-medium mb-1">
                  {matchInfo.format}
                </div>
                <div className="text-xs font-medium">
                  RRR: {matchInfo.requiredRunRate}
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-1">
                  <span className="font-bold text-xl">{matchInfo.teams[1].shortName}</span>
                </div>
                <span className="text-sm font-medium">{matchInfo.teams[1].name}</span>
                <span className="text-lg font-bold mt-1">
                  {matchInfo.teams[1].score}-{matchInfo.teams[1].wickets} ({matchInfo.teams[1].overs})
                </span>
              </div>
            </div>
            
            <div className="text-center text-xs text-muted-foreground mt-2">
              {matchInfo.venue} • {matchInfo.time}
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="live" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="live" className="flex-1">Live</TabsTrigger>
            <TabsTrigger value="scorecard" className="flex-1">Scorecard</TabsTrigger>
            <TabsTrigger value="commentary" className="flex-1">Commentary</TabsTrigger>
            <TabsTrigger value="stats" className="flex-1">Stats</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-300px)]">
            <TabsContent value="live" className="mt-0 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-2">Match Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Current Run Rate:</span>
                        <span className="font-medium">{matchInfo.runRate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Required Run Rate:</span>
                        <span className="font-medium">{matchInfo.requiredRunRate}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Projected Score:</span>
                        <span className="font-medium">196</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-3">Batting - {matchInfo.teams[1].name}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Batter</TableHead>
                            <TableHead className="text-right">R</TableHead>
                            <TableHead className="text-right">B</TableHead>
                            <TableHead className="text-right">4s</TableHead>
                            <TableHead className="text-right">6s</TableHead>
                            <TableHead className="text-right">SR</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {matchInfo.teams[1].players.slice(0, 3).map((player) => (
                            <TableRow key={player.name}>
                              <TableCell>{player.name}</TableCell>
                              <TableCell className="text-right">{player.runs}</TableCell>
                              <TableCell className="text-right">{player.balls}</TableCell>
                              <TableCell className="text-right">{player.fours}</TableCell>
                              <TableCell className="text-right">{player.sixes}</TableCell>
                              <TableCell className="text-right">{player.strikeRate}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-3">Bowling - {matchInfo.teams[0].name}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Bowler</TableHead>
                            <TableHead className="text-right">O</TableHead>
                            <TableHead className="text-right">M</TableHead>
                            <TableHead className="text-right">R</TableHead>
                            <TableHead className="text-right">W</TableHead>
                            <TableHead className="text-right">ECON</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {matchInfo.teams[0].bowlers.map((bowler) => (
                            <TableRow key={bowler.name}>
                              <TableCell>{bowler.name}</TableCell>
                              <TableCell className="text-right">{bowler.overs}</TableCell>
                              <TableCell className="text-right">{bowler.maidens}</TableCell>
                              <TableCell className="text-right">{bowler.runs}</TableCell>
                              <TableCell className="text-right">{bowler.wickets}</TableCell>
                              <TableCell className="text-right">{bowler.economy}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="scorecard" className="mt-0 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-3">Batting - {matchInfo.teams[0].name}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Batter</TableHead>
                            <TableHead className="text-right">R</TableHead>
                            <TableHead className="text-right">B</TableHead>
                            <TableHead className="text-right">4s</TableHead>
                            <TableHead className="text-right">6s</TableHead>
                            <TableHead className="text-right">SR</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {matchInfo.teams[0].players.map((player) => (
                            <TableRow key={player.name}>
                              <TableCell>{player.name}</TableCell>
                              <TableCell className="text-right">{player.runs}</TableCell>
                              <TableCell className="text-right">{player.balls}</TableCell>
                              <TableCell className="text-right">{player.fours}</TableCell>
                              <TableCell className="text-right">{player.sixes}</TableCell>
                              <TableCell className="text-right">{player.strikeRate}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-3">Bowling - {matchInfo.teams[1].name}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Bowler</TableHead>
                            <TableHead className="text-right">O</TableHead>
                            <TableHead className="text-right">M</TableHead>
                            <TableHead className="text-right">R</TableHead>
                            <TableHead className="text-right">W</TableHead>
                            <TableHead className="text-right">ECON</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {matchInfo.teams[1].bowlers.map((bowler) => (
                            <TableRow key={bowler.name}>
                              <TableCell>{bowler.name}</TableCell>
                              <TableCell className="text-right">{bowler.overs}</TableCell>
                              <TableCell className="text-right">{bowler.maidens}</TableCell>
                              <TableCell className="text-right">{bowler.runs}</TableCell>
                              <TableCell className="text-right">{bowler.wickets}</TableCell>
                              <TableCell className="text-right">{bowler.economy}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-sm font-medium mb-3">Batting - {matchInfo.teams[1].name}</h3>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Batter</TableHead>
                            <TableHead className="text-right">R</TableHead>
                            <TableHead className="text-right">B</TableHead>
                            <TableHead className="text-right">4s</TableHead>
                            <TableHead className="text-right">6s</TableHead>
                            <TableHead className="text-right">SR</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {matchInfo.teams[1].players.map((player) => (
                            <TableRow key={player.name}>
                              <TableCell>{player.name}</TableCell>
                              <TableCell className="text-right">{player.runs}</TableCell>
                              <TableCell className="text-right">{player.balls}</TableCell>
                              <TableCell className="text-right">{player.fours}</TableCell>
                              <TableCell className="text-right">{player.sixes}</TableCell>
                              <TableCell className="text-right">{player.strikeRate}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="commentary" className="mt-0">
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    {matchInfo.commentary.map((item, index) => (
                      <div key={index} className="border-b border-border/30 pb-3 last:border-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2 py-0.5 bg-muted rounded text-xs font-medium">
                            {item.over}
                          </span>
                          {index === 0 && (
                            <span className="text-xs text-cricket-live font-medium">
                              LATEST
                            </span>
                          )}
                        </div>
                        <p className="text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="stats" className="mt-0 space-y-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Run Comparison</h3>
                  <div className="h-60">
                    <ChartContainer 
                      config={{ 
                        MUM: { color: "#9b87f5" }, 
                        DEL: { color: "#f97316" } 
                      }}
                    >
                      <BarChart data={runData}>
                        <XAxis dataKey="over" />
                        <YAxis />
                        <Bar dataKey="MUM" fill="#9b87f5" name={matchInfo.teams[0].shortName} />
                        <Bar dataKey="DEL" fill="#f97316" name={matchInfo.teams[1].shortName} />
                        <ChartTooltip 
                          content={
                            <ChartTooltipContent />
                          } 
                        />
                      </BarChart>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-sm font-medium mb-3">Key Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Highest Score</p>
                      <p className="font-medium">Rohit S (65)</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Best Bowler</p>
                      <p className="font-medium">Bumrah J (2/22)</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Total Boundaries</p>
                      <p className="font-medium">28 (21 fours, 7 sixes)</p>
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-center">
                      <p className="text-xs text-muted-foreground mb-1">Run Rate</p>
                      <p className="font-medium">9.82</p>
                    </div>
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

export default MatchDetails;
