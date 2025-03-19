
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertTriangle, CheckCircle, Edit, Plus, Trash } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const AdminPanel = () => {
  // Mock local matches data
  const [localMatches, setLocalMatches] = useState([
    {
      id: "local1",
      team1: "Mumbai Tigers",
      team2: "Delhi Dragons",
      venue: "Mumbai Cricket Ground",
      date: "2023-06-15",
      time: "14:30",
      status: "upcoming"
    },
    {
      id: "local2",
      team1: "Chennai Kings",
      team2: "Bangalore Lions",
      venue: "Chennai Stadium",
      date: "2023-06-16",
      time: "18:00",
      status: "upcoming"
    },
    {
      id: "local3",
      team1: "Kolkata Knights",
      team2: "Rajasthan Royals",
      venue: "Eden Gardens",
      date: "2023-06-17",
      time: "16:00",
      status: "upcoming"
    },
    {
      id: "local4",
      team1: "Gujarat Titans",
      team2: "Lucknow Giants",
      venue: "Ahmedabad Stadium",
      date: "2023-06-14",
      time: "19:00",
      status: "live"
    }
  ]);
  
  const [editMatch, setEditMatch] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle edit
  const handleEdit = (match: any) => {
    setEditMatch({ ...match });
    setIsEditing(true);
  };

  // Function to handle delete
  const handleDelete = (id: string) => {
    setLocalMatches(localMatches.filter(match => match.id !== id));
    setSuccessMessage("Match deleted successfully");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Function to save edited match
  const handleSave = () => {
    if (!editMatch.team1 || !editMatch.team2 || !editMatch.venue || !editMatch.date || !editMatch.time) {
      setErrorMessage("All fields are required");
      return;
    }
    
    if (isEditing) {
      setLocalMatches(localMatches.map(match => match.id === editMatch.id ? editMatch : match));
      setSuccessMessage("Match updated successfully");
    } else {
      const newMatch = {
        ...editMatch,
        id: `local${Date.now()}`,
        status: "upcoming"
      };
      setLocalMatches([...localMatches, newMatch]);
      setSuccessMessage("New match added successfully");
    }
    
    setEditMatch(null);
    setIsEditing(false);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // Function to cancel editing
  const handleCancel = () => {
    setEditMatch(null);
    setIsEditing(false);
    setErrorMessage("");
  };

  // Function to create new match
  const handleCreate = () => {
    setEditMatch({
      id: "",
      team1: "",
      team2: "",
      venue: "",
      date: "",
      time: "",
      status: "upcoming"
    });
    setIsEditing(false);
    setErrorMessage("");
  };

  return (
    <Layout title="Admin Panel" showNav={true}>
      <div className="pt-2 pb-20">
        <Tabs defaultValue="matches" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="matches" className="flex-1">Manage Matches</TabsTrigger>
            <TabsTrigger value="settings" className="flex-1">Settings</TabsTrigger>
          </TabsList>
          
          <div className="mb-4">
            {successMessage && (
              <div className="bg-green-100 border border-green-200 text-green-800 rounded-md p-3 flex items-center mb-4">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>{successMessage}</span>
              </div>
            )}
            
            {errorMessage && (
              <div className="bg-red-100 border border-red-200 text-red-800 rounded-md p-3 flex items-center mb-4">
                <AlertTriangle className="h-5 w-5 mr-2" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>
          
          <TabsContent value="matches" className="mt-0">
            {editMatch ? (
              <Card>
                <CardHeader>
                  <CardTitle>{isEditing ? "Edit Match" : "Add New Match"}</CardTitle>
                  <CardDescription>
                    {isEditing
                      ? "Update the details of the selected match"
                      : "Enter the details for the new match"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="team1">Team 1</Label>
                        <Input
                          id="team1"
                          value={editMatch.team1}
                          onChange={(e) => setEditMatch({ ...editMatch, team1: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="team2">Team 2</Label>
                        <Input
                          id="team2"
                          value={editMatch.team2}
                          onChange={(e) => setEditMatch({ ...editMatch, team2: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venue">Venue</Label>
                      <Input
                        id="venue"
                        value={editMatch.venue}
                        onChange={(e) => setEditMatch({ ...editMatch, venue: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={editMatch.date}
                          onChange={(e) => setEditMatch({ ...editMatch, date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={editMatch.time}
                          onChange={(e) => setEditMatch({ ...editMatch, time: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save</Button>
                </CardFooter>
              </Card>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Local Matches</h3>
                  <Button onClick={handleCreate} className="flex items-center">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Match
                  </Button>
                </div>
                
                <ScrollArea className="h-[calc(100vh-230px)]">
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Teams</TableHead>
                            <TableHead>Venue</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {localMatches.map((match) => (
                            <TableRow key={match.id}>
                              <TableCell className="font-medium">
                                {match.team1} vs {match.team2}
                              </TableCell>
                              <TableCell>{match.venue}</TableCell>
                              <TableCell>
                                {new Date(match.date).toLocaleDateString()} {match.time}
                              </TableCell>
                              <TableCell>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  match.status === 'live' 
                                    ? 'bg-cricket-live/10 text-cricket-live' 
                                    : 'bg-muted text-muted-foreground'
                                }`}>
                                  {match.status === 'live' ? 'Live' : 'Upcoming'}
                                </span>
                              </TableCell>
                              <TableCell className="text-right">
                                <div className="flex justify-end gap-2">
                                  <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    onClick={() => handleEdit(match)}
                                  >
                                    <Edit className="h-4 w-4" />
                                  </Button>
                                  <Button 
                                    variant="ghost" 
                                    size="icon"
                                    onClick={() => handleDelete(match.id)}
                                  >
                                    <Trash className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </ScrollArea>
              </>
            )}
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
                <CardDescription>
                  Configure your admin account and application settings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-name">Admin Name</Label>
                  <Input id="admin-name" defaultValue="Cricket Admin" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Email</Label>
                  <Input id="admin-email" type="email" defaultValue="admin@cricket.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Change Password</Label>
                  <Input id="admin-password" type="password" />
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="text-sm font-medium mb-3">Application Settings</h4>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="app-name">Application Name</Label>
                      <Input id="app-name" defaultValue="Cricket Scores" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notifications">Default Notification Time</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Input 
                            id="notifications" 
                            type="number" 
                            defaultValue="30" 
                            min="1" 
                            className="pr-12" 
                          />
                        </div>
                        <div>
                          <select 
                            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                            defaultValue="minutes"
                          >
                            <option value="minutes">Minutes</option>
                            <option value="hours">Hours</option>
                            <option value="days">Days</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Save Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AdminPanel;
