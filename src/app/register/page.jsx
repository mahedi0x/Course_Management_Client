// app/login/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-10">
            <h2 className="text-3xl font-bold text-center pb-5">Register Please</h2>
    
         

          {/* Email/Password Form – শুধু দেখানোর জন্য (কাজ করবে না) */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <div className="relative">
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 pr-14 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 text-gray-500" /> : <Eye className="w-5 h-5 text-gray-500" />}
                </button>
              </div>
            </div>

            {/* এই বাটন কিছুই করবে না – শুধু UI */}
            <button
              type="submit"
              disabled
              className="w-full bg-gray-400 text-gray-200 font-bold py-4 rounded-2xl cursor-not-allowed text-lg opacity-60"
            >
              Log In with Email
            </button>
          </form>
           {/* Divider */}
           <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-6 bg-white text-gray-500 font-medium">OR</span>
            </div>
          </div>

          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full bg-white border-2 border-gray-300 mt-10 hover:border-indigo-600 text-gray-800 font-bold py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-4 group mb-8"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              width={28}
              height={28}
              className="group-hover:scale-110 transition"
            />
            <span className="text-lg">Continue with Google</span>
          </button>

         


          {/* Register Link */}
          <p className="text-center mt-8 text-gray-600">
            Dont have an account?{" "}
            <Link href="/login" className="text-indigo-600 font-bold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}