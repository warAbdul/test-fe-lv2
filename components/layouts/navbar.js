
import { ChevronDown, Menu, LogOut } from "lucide-react"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Navbar({ setSidebarOpen }) {
  const { data: session, status } = useSession();
   console.log(session)
  return (
    <header className="z-10 flex items-center justify-between h-16 px-6 bg-black/50 backdrop-blur-xl border-b border-white/10">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-white hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* <div className="flex items-center space-x-4"> */}
      <details className=" relative z-50">
        <summary className="flex items-center space-x-2 cursor-pointer list-none text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 transition-all duration-200 group p-2 rounded-full">
          <Image
              src={session?.user?.avatar}
              width={40}
              height={40}
              alt="User avatar"
              className="rounded-full"
            />
          <span className="text-sm font-medium">{session?.user?.email}</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </summary>

        <div className="absolute right-0 mt-2 w-48 bg-gradient-to-r from-purple-500/20 to-cyan-500/20  border rounded shadow-lg z-[9999] ">
          <button
            onClick={() =>
              signOut({ callbackUrl: "/auth/login", redirect: true })
            }
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-white z-[999]"
          >
            <LogOut className="w-4 h-4 text-white" />
            Sign Out
          </button>
        </div>
      </details>
      {/* </div> */}
    </header>
  );
}
