// components/LoadingScreen.tsx
"use client"
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="text-center">
      

        {/* App Name */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Please Wait..
        </h1>

        {/* Loading Text */}
        <p className="text-xl text-gray-600 font-medium tracking-wide">
          Loading your experience...
        </p>

        {/* Animated Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Subtle Progress Bar */}
        <div className="mt-12 max-w-sm mx-auto">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full animate-pulse w-full origin-left animate-[loading_2s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>

      {/* Custom CSS Animation */}
      <style jsx>{`
        @keyframes loading {
          0% {
            transform: scaleX(0.1);
          }
          50% {
            transform: scaleX(0.8);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
}