// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // ← Add this for active route
import { useState } from "react";
import { Menu, X, Plus, LayoutList, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // ← Get current route
  const pathname = usePathname();

  const publicLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Add Courses", href: "/add-courses" },
    { name: "Manage Courses", href: "/manage-courses" }, // Fixed name
    { name: "Instructor", href: "/instructor" },
    { name: "Contact", href: "/contact" },
  ];

  // ← Check if link is active
  const isActive = (href) => pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">LearnSkill</span>
          </Link>

          {/* Desktop Links - WITH ACTIVE STYLES */}
          <div className="hidden md:flex items-center space-x-8">
            {publicLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative font-medium transition-all duration-200 px-1 py-1
                  ${
                    isActive(link.href)
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }
                `}
              >
                {link.name}
                {/* Active underline indicator */}
                {isActive(link.href) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Unchanged */}
          <div className="flex items-center space-x-4">
            {status === "authenticated" && session?.user ? (
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
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition shadow-md"
                >
                  Login
                </Link>
              </div>
            )}

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - WITH ACTIVE STYLES */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {publicLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-2 px-3 rounded-xl font-medium transition-all
                  ${
                    isActive(link.href)
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
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