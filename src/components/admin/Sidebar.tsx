
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, Users, Mail, ChevronLeft, ChevronRight,
  Settings, HelpCircle, LogOut
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { signOut } = useAuth();
  
  const links = [
    { to: "/admin", icon: <Home size={20} />, label: "Dashboard", exact: true },
    { to: "/admin/contacts", icon: <Users size={20} />, label: "Contacts", exact: false },
    { to: "/admin/newsletters", icon: <Mail size={20} />, label: "Newsletter", exact: false }
  ];

  return (
    <div 
      className={`bg-white border-r border-gray-200 flex flex-col h-screen transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className={`p-4 border-b flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}>
        {!collapsed && (
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 overflow-hidden rounded-md bg-white flex items-center justify-center flex-shrink-0">
              <img 
                src="/lovable-uploads/2ab55cc8-3c4c-4e7a-9716-af191f2e6fad.png" 
                alt="Desire Ventures Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-semibold text-gray-900">Admin</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-500"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="px-3 space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) => `
                flex items-center px-3 py-2 text-sm font-medium rounded-md
                ${isActive 
                  ? 'bg-primary-50 text-primary-700' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
                ${collapsed ? 'justify-center' : ''}
              `}
            >
              <div className="flex items-center">
                <span className={collapsed ? '' : 'mr-3'}>{link.icon}</span>
                {!collapsed && <span>{link.label}</span>}
              </div>
            </NavLink>
          ))}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <div className="flex flex-col space-y-1">
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => `
              flex items-center px-3 py-2 text-sm font-medium rounded-md
              ${isActive 
                ? 'bg-primary-50 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'
              }
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            <div className="flex items-center">
              <span className={collapsed ? '' : 'mr-3'}><Settings size={20} /></span>
              {!collapsed && <span>Settings</span>}
            </div>
          </NavLink>
          
          <NavLink
            to="/admin/help"
            className={({ isActive }) => `
              flex items-center px-3 py-2 text-sm font-medium rounded-md
              ${isActive 
                ? 'bg-primary-50 text-primary-700' 
                : 'text-gray-700 hover:bg-gray-100'
              }
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            <div className="flex items-center">
              <span className={collapsed ? '' : 'mr-3'}><HelpCircle size={20} /></span>
              {!collapsed && <span>Help</span>}
            </div>
          </NavLink>
          
          <button
            onClick={() => signOut()}
            className={`
              flex items-center px-3 py-2 text-sm font-medium rounded-md
              text-red-600 hover:bg-red-50
              ${collapsed ? 'justify-center' : ''}
            `}
          >
            <div className="flex items-center">
              <span className={collapsed ? '' : 'mr-3'}><LogOut size={20} /></span>
              {!collapsed && <span>Sign Out</span>}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
