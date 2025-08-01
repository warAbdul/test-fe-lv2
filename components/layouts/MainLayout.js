
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", link: "#", icon: <Home className="h-4 w-4" /> },
  { name: "Users", link: "#", icon: <Users className="h-4 w-4" /> },
  { name: "Products", link: "#", icon: <Package className="h-4 w-4" /> },
  { name: "Orders", link: "#", icon: <ShoppingCart className="h-4 w-4" /> },
  { name: "Analytics", link: "#", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Settings", link: "#", icon: <Settings className="h-4 w-4" /> },
];

export default function AdminLayout({children}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-black text-white relative overflow-hidden">
      <BackgroundBeams />

      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} />

        <main className="h-screen pr-1 flex-1 overflow-x-hidden overflow-y-auto p-6 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="absolute inset-0">
              <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" />
              <div
                className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse"
                style={{ animationDelay: "3s" }}
              />
            </div>
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
