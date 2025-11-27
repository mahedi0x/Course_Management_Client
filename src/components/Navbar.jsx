// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plus, LayoutList, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  console.log(session?.user)

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Instructor", href: "/instructor" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">CourseHub</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {publicLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-gray-700 hover:text-indigo-600 font-medium transition">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {status === "authenticated" && session?.user ? (
              /* Logged In – User Dropdown */
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200 transition"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-600 ring-offset-2">
                    <img
                      src={session?.user?.image || `https://ui-avatars.com/api/?name=${session.user.name}&background=6366f1&color=fff`}
                      alt={session.user.name || "User"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium hidden lg:block">
                    {session.user.name?.split(" ")[0] || "User"}
                  </span>
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="px-4 py-3 bg-gray-50 border-b">
                        <p className="font-semibold">{session.user.name}</p>
                        <p className="text-sm text-gray-500 truncate">{session.user.email}</p>
                      </div>
                      <Link href="/add-courses" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition">
                        <Plus className="w-5 h-5" /> Add Course
                      </Link>
                      <Link href="/manage-courses" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition">
                        <LayoutList className="w-5 h-5" /> Manage Courses
                      </Link>
                      <div className="border-t pt-2">
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="flex w-full items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 transition text-left"
                        >
                          <LogOut className="w-5 h-5" /> Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Not Logged In – Login Button (এখন /login পেজে যাবে) */
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition shadow-md"
                >
                  Login
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {publicLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-indigo-600 font-medium">
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t">
              {status === "authenticated" ? (
                <>
                  <Link href="/add-courses" onClick={() => setIsOpen(false)} className="flex items-center gap-3 py-2">
                    <Plus className="w-5 h-5" /> Add Course
                  </Link>
                  <Link href="/manage-courses" onClick={() => setIsOpen(false)} className="flex items-center gap-3 py-2">
                    <LayoutList className="w-5 h-5" /> Manage Courses
                  </Link>
                  <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center gap-3 py-2 text-red-600 w-full text-left">
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </>
              ) : (
                <Link href="/login" className="block w-full text-center py-3 bg-indigo-600 text-white rounded-full font-medium">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}