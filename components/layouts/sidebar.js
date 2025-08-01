
import { X, Home, Users, Package, ShoppingCart, Settings, BarChart3 } from "lucide-react"

import Link from "next/link";

const navItems = [
  { name: "Profile", link: "/", icon: <Home className="h-4 w-4" /> },
  { name: "Data Product", link: "/page-1", icon: <Users className="h-4 w-4" /> },

]


export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <aside
      className={`
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        fixed inset-y-0 left-0 z-40 w-64 bg-black/80 backdrop-blur-xl border-r border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
      `}
    >
      <div className="flex items-center justify-between h-16 px-6 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Test FE2 Hadi
          </span>
        </div>
        <button
          // variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden text-white hover:bg-white/10"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-200 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
