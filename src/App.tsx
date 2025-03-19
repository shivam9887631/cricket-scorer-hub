
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LocalMatches from "./pages/LocalMatches";
import InternationalMatches from "./pages/InternationalMatches";
import MatchDetails from "./pages/MatchDetails";
import PlayerStats from "./pages/PlayerStats";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return <>{children}</>;
};

// Home route component that redirects to login if not authenticated
const HomeRoute = () => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return <Index />;
};

// Define the AppRoutes component to use the auth context
const AppRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      {/* Redirect from root to home if logged in, otherwise to login */}
      <Route path="/" element={<HomeRoute />} />
      
      {/* Auth routes */}
      <Route path="/login" element={
        currentUser ? <Navigate to="/" /> : <Login />
      } />
      
      {/* Protected routes that require authentication */}
      <Route path="/local-matches" element={
        <ProtectedRoute>
          <LocalMatches />
        </ProtectedRoute>
      } />
      <Route path="/international-matches" element={
        <ProtectedRoute>
          <InternationalMatches />
        </ProtectedRoute>
      } />
      <Route path="/match/:id" element={
        <ProtectedRoute>
          <MatchDetails />
        </ProtectedRoute>
      } />
      <Route path="/player/:id" element={
        <ProtectedRoute>
          <PlayerStats />
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />
      <Route path="/notifications" element={
        <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute>
          <AdminPanel />
        </ProtectedRoute>
      } />
      
      {/* Fallback route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <AppRoutes />
        </TooltipProvider>
      </AuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
