import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dashboardService, DashboardData } from "@/services/dashboardService";
import { authService } from "@/services/authService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    if (!authService.isAuthenticated()) {
      navigate("/login");
      return;
    }

    // Fetch dashboard data
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await dashboardService.getDashboardData();
        setDashboardData(data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
        toast({
          title: "Error",
          description: "Failed to load dashboard data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate, toast]);

  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="container mx-auto p-6 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Loading dashboard...</h1>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Dashboard</h1>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {dashboardData && (
        <>
          {/* User Profile Section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {dashboardData.user.name}
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {dashboardData.user.email}
                </p>
                <p>
                  <span className="font-medium">Role:</span>{" "}
                  {dashboardData.user.role}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Hackathons Section */}
          <h2 className="text-2xl font-bold mb-4">Your Hackathons</h2>
          
          {dashboardData.hackathons && dashboardData.hackathons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dashboardData.hackathons.map((hackathon) => (
                <Card key={hackathon.id}>
                  <CardHeader>
                    <CardTitle>{hackathon.title}</CardTitle>
                    <CardDescription>
                      {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">{hackathon.description}</p>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{hackathon.location}</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {hackathon.status}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  You haven't joined any hackathons yet.
                </p>
                <div className="flex justify-center mt-4">
                  <Button onClick={() => navigate("/")}>
                    Explore Hackathons
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard; 