
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Mail, AlertCircle } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const navigate = useNavigate();
  const { login, resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (err: any) {
      setError(err.message || "Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    setIsLoading(true);
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (err: any) {
      setError(err.message || "Failed to send reset email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-cricket-pitch">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-cricket-sky/10 flex items-center justify-center mx-auto mb-4">
            <div className="w-10 h-10 rounded-full bg-cricket-sky text-white flex items-center justify-center">
              <ChevronRight className="h-6 w-6" />
            </div>
          </div>
          <h1 className="text-2xl font-bold">Cricket Scores</h1>
          <p className="text-muted-foreground">Sign in to access your account</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>{isResetPassword ? "Reset Password" : "Sign In"}</CardTitle>
            <CardDescription>
              {isResetPassword 
                ? "Enter your email to receive a password reset link" 
                : "Enter your credentials to continue"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isResetPassword ? (
              <form onSubmit={handleLogin}>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="email" 
                        placeholder="Enter your email" 
                        className="pl-10" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        type="email"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <button 
                        type="button"
                        className="text-xs text-cricket-sky hover:underline"
                        onClick={() => setIsResetPassword(true)}
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password" 
                        className="pl-10"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-cricket-sky hover:bg-cricket-sky/90" disabled={isLoading}>
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleResetPassword}>
                {error && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                
                {resetSent && (
                  <Alert className="mb-4 bg-cricket-grass/10 text-cricket-grass border-cricket-grass/20">
                    <AlertDescription>
                      Reset link sent! Check your email for instructions.
                    </AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input 
                        id="reset-email" 
                        placeholder="Enter your email" 
                        className="pl-10" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        type="email"
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-cricket-sky hover:bg-cricket-sky/90" disabled={isLoading}>
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                  
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => setIsResetPassword(false)}
                    disabled={isLoading}
                  >
                    Back to Login
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" className="w-full" onClick={() => navigate("/")}>
                Continue as Guest
              </Button>
            </div>
          </CardFooter>
        </Card>
        
        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-cricket-sky hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
