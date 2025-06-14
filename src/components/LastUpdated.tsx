
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface LastUpdatedProps {
  lastTicketUpdate?: Date;
}

export const LastUpdated: React.FC<LastUpdatedProps> = ({ lastTicketUpdate }) => {
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const updateTimestamp = () => {
      if (lastTicketUpdate) {
        const formattedTime = lastTicketUpdate.toLocaleDateString('en-US', { 
          year: 'numeric',
          month: 'long', 
          day: 'numeric'
        }) + ' - ' + lastTicketUpdate.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        });
        setLastUpdated(formattedTime);
      } else {
        setLastUpdated("April 8, 2025 - 10:45 AM");
      }
    };

    updateTimestamp();
  }, [lastTicketUpdate]);

  const handleRefresh = (): void => {
    setIsRefreshing(true);
    
    // Simulate refresh
    setTimeout(() => {
      const now = new Date();
      const formattedTime = now.toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
      }) + ' - ' + now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      setLastUpdated(formattedTime);
      setIsRefreshing(false);
      console.log('Data refreshed at:', formattedTime);
    }, 1000);
  };

  return (
    <div className="flex items-center text-sm text-gray-500">
      <span>Last updated: {lastUpdated}</span>
      <Button 
        variant="ghost" 
        size="icon" 
        className={`ml-1 h-6 w-6 ${isRefreshing ? 'animate-spin' : ''}`}
        onClick={handleRefresh}
        disabled={isRefreshing}
      >
        <RefreshCw className="h-4 w-4" />
      </Button>
    </div>
  );
};
