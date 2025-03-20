
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Mail } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

interface ResetPasswordFormProps {
  email: string;
  setEmail: (email: string) => void;
  setIsResetPassword: (value: boolean) => void;
}

const ResetPasswordForm = ({ 
  email, 
  setEmail, 
  setIsResetPassword 
}: ResetPasswordFormProps) => {
  const { resetPassword } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetSent, setResetSent] = useState(false);

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
  );
};

export default ResetPasswordForm;
