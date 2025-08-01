
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
export default function MainContent() {
   const { data: session, status } = useSession();
   console.log(session);
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        {/* Moving Gradient Lines */}
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

     <div className="relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl" />
          {/* <h3 className="text-xl font-bold text-white mb-6 flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
            Recent Activity
          </h3> */}
          <div className="space-y-4">
            <TextGenerateEffect
              words="Welcome back, John! Here's what's happening with your business today."
              className="text-3xl font-bold text-white mb-4"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 p-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl" />
          <h3 className="text-xl font-bold text-white mb-6">Profile User</h3>
          <div className="flex flex-col items-center space-y-4">
            <Image
              className="w-24 h-24 rounded-full object-cover shadow-md"
              width={40}
              height={40}
              src={session?.user?.avatar}
              alt={session?.user?.name}
            />
            <div className="text-center">
              <h2 className="text-white text-sm font-medium group-hover:text-purple-300 transition-colors">
                {session?.user?.name}
              </h2>
              <p className="text-white text-sm font-medium group-hover:text-purple-300 transition-color">
                {session?.user?.email}
              </p>
            </div>
            <div className="w-full flex justify-between items-center pt-4 border-t">
              <span className="text-white text-sm font-medium group-hover:text-purple-300 transition-color">
                Role
              </span>
              <span className="text-white text-sm font-medium group-hover:text-purple-300 transition-color">
                {session?.user?.role}
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-white text-sm font-medium group-hover:text-purple-300 transition-color">
                ID
              </span>
              <span className="text-white text-sm font-medium group-hover:text-purple-300 transition-color">
                {session?.user?.id}
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </main>
  );
}
