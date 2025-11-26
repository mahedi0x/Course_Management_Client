// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plus, LayoutList, LogOut, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Change this to `true` to test logged-in state
  const isLoggedIn = false; // Set to true when user logs in (you'll connect this later)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Add Course", href: "/add-courses" },
    { name: "Manage Courses", href: "/manage-courses" },
    { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 font-medium transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              /* Logged In – User Dropdown */
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-3 rounded-full bg-gray-100 px-4 py-2 hover:bg-gray-200 transition"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    M
                  </div>
                  <span className="font-medium hidden lg:block">Mahadi</span>
                </button>

                {/* Dropdown */}
                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setIsDropdownOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">
                      <div className="px-4 py-3 bg-gray-50 border-b">
                        <p className="font-semibold">Mahadi Hasan</p>
                        <p className="text-sm text-gray-500">
                          mahadi@example.com
                        </p>
                      </div>

                      <Link
                        href="/add-courses"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
                      >
                        <Plus className="w-5 h-5" />
                        Add Course
                      </Link>

                      <Link
                        href="/manage-courses"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-indigo-50 transition"
                      >
                        <LayoutList className="w-5 h-5" />
                        Manage Courses
                      </Link>

                      <div className="border-t mt-2 pt-2">
                        <button className="flex w-full items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 transition">
                          <LogOut className="w-5 h-5" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Not Logged In – Login/Register */
              <div className="hidden md:flex items-center space-x-3">
                <Link
                  href="/login"
                  className="px-6 py-2.5 text-gray-700 font-medium hover:text-indigo-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition shadow-md"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-indigo-600 font-medium"
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/add-course"
                    className="flex items-center gap-3 py-2"
                  >
                    <Plus className="w-5 h-5" /> Add Course
                  </Link>
                  <Link
                    href="/manage-courses"
                    className="flex items-center gap-3 py-2"
                  >
                    <LayoutList className="w-5 h-5" /> Manage Courses
                  </Link>
                  <button className="flex items-center gap-3 py-2 text-red-600 w-full text-left">
                    <LogOut className="w-5 h-5" /> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block py-2 text-gray-700 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="block py-3 text-center bg-indigo-600 text-white rounded-full font-medium"
                  >
                    Register Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
