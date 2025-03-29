
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";
import { Mail, Users, Calendar, CheckCircle } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  service: string;
  created_at: string;
}

interface Email {
  id: string;
  contact_id: string;
  subject: string;
  sent_at: string;
}

const Dashboard = () => {
  const [contactsCount, setContactsCount] = useState(0);
  const [emailsSent, setEmailsSent] = useState(0);
  const [serviceData, setServiceData] = useState<any[]>([]);
  const [recentContacts, setRecentContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const COLORS = ["#0c4da2", "#0070f3", "#38bdf8", "#93c5fd"];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Get total contacts count
        const { count: contactsCount } = await supabase
          .from("contacts")
          .select("*", { count: "exact", head: true });

        // Get total emails sent
        const { count: emailsCount } = await supabase
          .from("sent_emails")
          .select("*", { count: "exact", head: true });
          
        // Get service distribution for pie chart
        const { data: services } = await supabase
          .from("contacts")
          .select("service")
          .not("service", "is", null);

        // Count services
        const serviceCountMap: Record<string, number> = {};
        services?.forEach(item => {
          const service = item.service || "Other";
          serviceCountMap[service] = (serviceCountMap[service] || 0) + 1;
        });

        const serviceChartData = Object.entries(serviceCountMap).map(([name, value]) => {
          let displayName = name;
          if (name === "water-delivery") displayName = "Water Delivery";
          if (name === "tank-cleaning") displayName = "Tank Cleaning";
          if (name === "exhauster") displayName = "Exhauster Service";
          
          return { name: displayName, value };
        });

        // Get 5 recent contacts
        const { data: recentContactsData } = await supabase
          .from("contacts")
          .select("*")
          .order("created_at", { ascending: false })
          .limit(5);

        setContactsCount(contactsCount || 0);
        setEmailsSent(emailsCount || 0);
        setServiceData(serviceChartData || []);
        setRecentContacts(recentContactsData || []);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex flex-row items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Contacts</p>
              <h3 className="text-2xl font-bold">{contactsCount}</h3>
            </div>
            <div className="p-2 bg-primary-100 rounded-full">
              <Users className="h-6 w-6 text-primary-700" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-row items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Emails Sent</p>
              <h3 className="text-2xl font-bold">{emailsSent}</h3>
            </div>
            <div className="p-2 bg-blue-100 rounded-full">
              <Mail className="h-6 w-6 text-blue-700" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-row items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Month</p>
              <h3 className="text-2xl font-bold">
                {recentContacts.filter(c => {
                  const date = new Date(c.created_at);
                  const now = new Date();
                  return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
                }).length}
              </h3>
            </div>
            <div className="p-2 bg-green-100 rounded-full">
              <Calendar className="h-6 w-6 text-green-700" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex flex-row items-center justify-between p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Response Rate</p>
              <h3 className="text-2xl font-bold">
                {contactsCount > 0 ? Math.round((emailsSent / contactsCount) * 100) : 0}%
              </h3>
            </div>
            <div className="p-2 bg-amber-100 rounded-full">
              <CheckCircle className="h-6 w-6 text-amber-700" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Service Distribution</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center">
            {serviceData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    labelLine={false}
                  >
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value} contacts`, 'Count']} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-center text-muted-foreground">No service data available</p>
            )}
          </CardContent>
        </Card>
        
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            {recentContacts.length > 0 ? (
              <div className="space-y-4">
                {recentContacts.map((contact) => (
                  <div key={contact.id} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50">
                    <div className="bg-primary-100 rounded-full p-2">
                      <Users className="h-5 w-5 text-primary-700" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                      <p className="text-xs text-gray-500 truncate">{contact.email}</p>
                      <p className="text-xs text-gray-500">{new Date(contact.created_at).toLocaleDateString()}</p>
                    </div>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {contact.service === 'water-delivery' ? 'Water Delivery' : 
                       contact.service === 'tank-cleaning' ? 'Tank Cleaning' :
                       contact.service === 'exhauster' ? 'Exhauster' : 'Other'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-muted-foreground py-4">No recent contacts</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
