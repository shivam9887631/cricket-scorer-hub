
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Calendar, Clock, Trophy, User } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Notifications = () => {
  // Mock notifications data
  const notificationData = [
    {
      id: 1,
      type: "match",
      title: "Match Starting Soon",
      message: "India vs England ODI match starts in 30 minutes",
      time: "30 minutes ago",
      isRead: false,
      icon: Calendar
    },
    {
      id: 2,
      type: "score",
      title: "WICKET!",
      message: "Virat Kohli dismissed for 82 (53)",
      time: "1 hour ago",
      isRead: false,
      icon: Trophy
    },
    {
      id: 3,
      type: "score",
      title: "FIFTY!",
      message: "Joe Root completes his half-century off 42 balls",
      time: "2 hours ago",
      isRead: true,
      icon: Trophy
    },
    {
      id: 4,
      type: "news",
      title: "Breaking News",
      message: "BCCI announces squad for upcoming T20 series",
      time: "5 hours ago",
      isRead: true,
      icon: Bell
    },
    {
      id: 5,
      type: "match",
      title: "Match Result",
      message: "Mumbai Tigers beat Delhi Dragons by 31 runs",
      time: "Yesterday",
      isRead: true,
      icon: Calendar
    },
    {
      id: 6,
      type: "news",
      title: "Player Update",
      message: "Jasprit Bumrah returns from injury for next series",
      time: "Yesterday",
      isRead: true,
      icon: User
    },
    {
      id: 7,
      type: "score",
      title: "CENTURY!",
      message: "Steve Smith scores 105 off 92 balls against NZ",
      time: "2 days ago",
      isRead: true,
      icon: Trophy
    },
    {
      id: 8,
      type: "match",
      title: "Match Scheduled",
      message: "South Africa vs Pakistan test match on June 15",
      time: "3 days ago",
      isRead: true,
      icon: Clock
    }
  ];

  const unreadCount = notificationData.filter(n => !n.isRead).length;
  
  return (
    <Layout title="Notifications" showNav={true}>
      <div className="pt-2 pb-20">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="all" className="flex-1">
              All
              {unreadCount > 0 && (
                <span className="ml-2 bg-cricket-live text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {unreadCount}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="matches" className="flex-1">Matches</TabsTrigger>
            <TabsTrigger value="scores" className="flex-1">Scores</TabsTrigger>
            <TabsTrigger value="news" className="flex-1">News</TabsTrigger>
          </TabsList>
          
          <ScrollArea className="h-[calc(100vh-180px)]">
            <TabsContent value="all" className="mt-0 space-y-3">
              {notificationData.map((notification) => (
                <NotificationCard key={notification.id} notification={notification} />
              ))}
            </TabsContent>
            
            <TabsContent value="matches" className="mt-0 space-y-3">
              {notificationData
                .filter(n => n.type === "match")
                .map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              }
            </TabsContent>
            
            <TabsContent value="scores" className="mt-0 space-y-3">
              {notificationData
                .filter(n => n.type === "score")
                .map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              }
            </TabsContent>
            
            <TabsContent value="news" className="mt-0 space-y-3">
              {notificationData
                .filter(n => n.type === "news")
                .map((notification) => (
                  <NotificationCard key={notification.id} notification={notification} />
                ))
              }
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </Layout>
  );
};

interface NotificationProps {
  notification: {
    id: number;
    type: string;
    title: string;
    message: string;
    time: string;
    isRead: boolean;
    icon: React.ComponentType<any>;
  };
}

const NotificationCard: React.FC<NotificationProps> = ({ notification }) => {
  const Icon = notification.icon;
  
  const getIconColor = () => {
    switch (notification.type) {
      case "match":
        return "text-cricket-sky";
      case "score":
        return "text-cricket-grass";
      case "news":
        return "text-cricket-ball";
      default:
        return "text-muted-foreground";
    }
  };
  
  return (
    <Card className={`${!notification.isRead ? 'bg-cricket-sky/5 border-cricket-sky/20' : ''}`}>
      <CardContent className="p-4">
        <div className="flex">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getIconColor()} bg-muted`}>
            <Icon className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className={`text-sm font-medium ${!notification.isRead ? 'text-cricket-sky' : ''}`}>
                {notification.title}
              </h3>
              {!notification.isRead && (
                <span className="w-2 h-2 bg-cricket-live rounded-full"></span>
              )}
            </div>
            <p className="text-sm mt-1">{notification.message}</p>
            <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Notifications;
