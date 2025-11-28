// app/login/page.tsx
"use client";

import Link from "next/link";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") return <div className="min-h-screen flex items-center justify-center text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">

          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="text-gray-600 mt-2">Sign in to continue to LearnSkill</p>
          </div>

          {/* Email/Password Form (দেখানোর জন্য) */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" required />
            <input type="password" placeholder="Password" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" required />
            <button type="submit" className="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl cursor-pointer">
              Sign In with Email
            </button>
          </form>

          <div className="my-8 text-center relative">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
            <span className="relative bg-white px-4 text-sm font-medium text-gray-500">OR</span>
          </div>

          {/* Google Login */}
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-300 rounded-xl hover:bg-gray-50 transition font-medium"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-6 h-6" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-sm text-gray-600">
            Dont have an account? <Link href="/register" className="font-bold text-indigo-600 hover:underline">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}