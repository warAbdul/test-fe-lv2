
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
        <div className="mb-8">
          <TextGenerateEffect
            words="Welcome back, John! Here's what's happening with your business today."
            className="text-3xl font-bold text-white mb-4"
          />
          <p className="text-white/70 text-lg">Hallo</p>
        </div>

        <div className="max-w-sm w-full bg-white p-6 rounded-2xl shadow-lg border">
          <div className="flex flex-col items-center space-y-4">
            {/* <Image
              src="/hadi.jpg"
              width={40}
              height={40}
              alt="User avatar"
              className="rounded-full"
            /> */}
            <Image
              className="w-24 h-24 rounded-full object-cover shadow-md"
              width={40}
              height={40}
              src={session?.user?.avatar}
              alt={session?.user?.name}
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-800">
                {session?.user?.email}
              </h2>
              <p className="text-sm text-gray-500">{session?.user?.email}</p>
            </div>
            <div className="w-full flex justify-between items-center pt-4 border-t">
              <span className="text-sm text-gray-600">Role</span>
              <span className="text-sm font-medium text-gray-900">
                {session?.user?.role}
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-sm text-gray-600">ID</span>
              <span className="text-sm text-gray-900">{session?.user?.id}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
