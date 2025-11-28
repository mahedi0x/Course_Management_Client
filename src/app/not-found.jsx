// app/not-found.tsx
import Link from "next/link";
import { Home, AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* 404 Icon + Animation */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-3xl opacity-50 animate-pulse rounded-full w-80 h-80 mx-auto" />
          
          <div className="relative">
            <div className="text-9xl md:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tighter">
              404
            </div>
            <div className="absolute -top-10 -right-10">
              <AlertCircle className="w-20 h-20 text-red-500 animate-ping" />
            </div>
          </div>
        </div>

        {/* Main Text */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Oops! Page Not Found
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          The page you are looking for does not exist or has been moved. 
          Do not worry, let is get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
          <Link href="/">
            <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Home className="w-6 h-6 group-hover:translate-x-1 transition" />
              Back to Home
            </button>
          </Link>

          <Link href="/" className="inline-flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-semibold text-lg transition">
            <ArrowLeft className="w-6 h-6" />
            Go Back
          </Link>
        </div>

        {/* Fun Element */}
        <div className="mt-20">
          <p className="text-gray-500 text-lg">
            Maybe the page is taking a coffee break
          </p>
        </div>

       
      </div>
    </div>
  );
}