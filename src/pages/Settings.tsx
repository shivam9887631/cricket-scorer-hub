
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Moon, Sun, Bell, BellOff, Lock, Globe, User, LogOut } from "lucide-react";

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [matchAlertsEnabled, setMatchAlertsEnabled] = useState(true);
  const [liveScoreAlertsEnabled, setLiveScoreAlertsEnabled] = useState(true);
  const [newsAlertsEnabled, setNewsAlertsEnabled] = useState(false);
  
  return (
    <Layout title="Settings" showNav={true}>
      <div className="pt-2 pb-20">
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Display</CardTitle>
              <CardDescription>Customize how the app looks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  {isDarkMode ? (
                    <Moon className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Sun className="h-5 w-5 text-muted-foreground" />
                  )}
                  <Label htmlFor="dark-mode">Dark mode</Label>
                </div>
                <Switch
                  id="dark-mode"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <CardDescription>Manage notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  {notificationsEnabled ? (
                    <Bell className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <BellOff className="h-5 w-5 text-muted-foreground" />
                  )}
                  <Label htmlFor="notifications">All notifications</Label>
                </div>
                <Switch
                  id="notifications"
                  checked={notificationsEnabled}
                  onCheckedChange={setNotificationsEnabled}
                />
              </div>
              
              <div className="space-y-3 pl-7">
                <div className="flex items-center justify-between py-1">
                  <Label htmlFor="match-alerts" className="text-sm">Match alerts</Label>
                  <Switch
                    id="match-alerts"
                    checked={matchAlertsEnabled}
                    onCheckedChange={setMatchAlertsEnabled}
                    disabled={!notificationsEnabled}
                  />
                </div>
                
                <div className="flex items-center justify-between py-1">
                  <Label htmlFor="live-score-alerts" className="text-sm">Live score updates</Label>
                  <Switch
                    id="live-score-alerts"
                    checked={liveScoreAlertsEnabled}
                    onCheckedChange={setLiveScoreAlertsEnabled}
                    disabled={!notificationsEnabled}
                  />
                </div>
                
                <div className="flex items-center justify-between py-1">
                  <Label htmlFor="news-alerts" className="text-sm">News and articles</Label>
                  <Switch
                    id="news-alerts"
                    checked={newsAlertsEnabled}
                    onCheckedChange={setNewsAlertsEnabled}
                    disabled={!notificationsEnabled}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Account</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between py-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-muted-foreground" />
                  <span>Profile Settings</span>
                </div>
                <div className="text-muted-foreground">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Lock className="h-5 w-5 text-muted-foreground" />
                  <span>Privacy & Security</span>
                </div>
                <div className="text-muted-foreground">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
              
              <div className="flex items-center justify-between py-2 cursor-pointer">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <span>Language & Region</span>
                </div>
                <div className="text-muted-foreground">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-4">
              <button className="w-full flex items-center justify-center space-x-2 py-2 text-cricket-live">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </CardContent>
          </Card>
          
          <div className="text-center text-xs text-muted-foreground mt-6">
            <p>Cricket Scores App v1.0.0</p>
            <p className="mt-1">© 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
