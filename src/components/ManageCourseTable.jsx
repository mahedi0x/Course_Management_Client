"use client";
import React, { useState } from "react";
import Link from 'next/link';
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function ManageCourseTable({ courses}) {
    const { data: session, status } = useSession();
    
      if (!session?.user) {
        redirect("/login");
      }

    const [allCourses, setAllCourses] = useState(courses);
    console.log(allCourses)

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this course?");
        if (!confirmDelete) return;

      const res = await fetch(`http://localhost:4000/courses/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
  
      if (data.acknowledged) {
        toast.success("Deleted blog successfully");
        setAllCourses((prev) => prev.filter((p) => p._id !== id));
      }
    };
     
    
  // Empty state - আরো আকর্ষণীয় ডিজাইন
  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-20 px-6 border-4 border-dashed border-gray-200 rounded-3xl bg-white shadow-lg mt-12">
        <svg className="mx-auto h-16 w-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M12 20.25h.01M12 7.75h.01M12 11.25h.01M12 14.75h.01M12 18.25h.01M12 3.75v16.5M3.75 10.5h16.5M3.75 14.5h16.5" />
        </svg>
        <p className="mt-4 text-3xl font-bold text-gray-800">
          No Courses Found
        </p>
        <p className="text-lg text-gray-500 mt-2">
          It looks like you havent published any courses yet.
        </p>
        <Link href="/add-courses">
          <button className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
            + Add New Course
          </button>
        </Link>
      </div>
    );
  }


  const getCategoryColor = (category) => {
    if (category.includes("Web") || category.includes("Development")) return "bg-blue-600";
    if (category.includes("Design")) return "bg-green-600";
    if (category.includes("Science") || category.includes("AI")) return "bg-red-600";
    if (category.includes("Program")) return "bg-yellow-600";
    return "bg-purple-600";
  };

  return (
    <div className="mt-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      
      {/* Header with Title and Count */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <p className="text-2xl text-gray-600 font-semibold">
            You have{" "}
            <span className="font-bold text-pink-600">{courses.length}</span>{" "}
            active course{courses.length !== 1 ? "s" : ""} 📚
          </p>
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* 🖥️ Desktop Table (>= md screen) */}
      {/* -------------------------------------- */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50">
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Instructor</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Published</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {courses.map((course) => (
              <tr key={course._id} className="hover:bg-indigo-50 transition duration-150">
                
                {/* Title */}
                <td className="px-6 py-5 whitespace-normal max-w-xs">
                  <p className="text-base font-semibold text-gray-900 line-clamp-2">
                    {course.title}
                  </p>
                </td>
                
                {/* Author */}
                <td className="px-6 py-5 text-sm text-gray-600 font-medium">
                  {course.author}
                </td>
                
                {/* Category */}
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex px-3 py-1 text-xs font-bold rounded-full text-white shadow-md ${getCategoryColor(course.category)}`}
                  >
                    {course.category}
                  </span>
                </td>
                
                {/* Date */}
                <td className="px-6 py-5 text-sm text-gray-500 font-bold">
                 
                  {
                    course.publishedDate
                  }
                </td>
                
                {/* Actions */}
                <td className="px-6 py-5 text-center">
                  <div className="flex justify-center gap-4">
                    
                    {/* View Button */}
                    <Link href={`/courses/${course._id}`}>
                        <button className="p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition duration-200" title="View Course">
                            {/* SVG for Eye/View */}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                        </button>
                    </Link>

                    {/* Edit Button (Placeholder) */}
                    <button  className="p-2 rounded-full text-yellow-600 hover:bg-yellow-100 transition duration-200" title="Edit Course">
                        {/* SVG for Edit */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                    </button>

                    {/* Delete Button */}
                    <button onClick={() => handleDelete(course._id)} className="p-2 rounded-full text-red-600 hover:bg-red-100 transition duration-200" title="Delete Course">
                        
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* -------------------------------------- */}
      {/* 📱 Mobile View - Cards (< md screen) */}
      {/* -------------------------------------- */}
      <div className="md:hidden px-4 py-6 space-y-5">
        {courses.map((course) => (
          <div 
            key={course._id} 
            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-200"
          >
            <h3 className="font-extrabold text-xl text-gray-900 line-clamp-2 mb-2">
              {course.title}
            </h3>
            
            <span
                className={`inline-block px-3 py-1 text-xs font-bold rounded-full text-white shadow-sm ${getCategoryColor(course.category)}`}
              >
                {course.category}
            </span>

            <div className="mt-4 space-y-2 text-sm text-gray-600 border-t pt-4">
              <p className="flex justify-between">
                <span className="font-semibold text-gray-700">Instructor:</span> 
                <span className="text-right">{course.author}</span>
              </p>
              <p className="flex justify-between">
                <span className="font-semibold text-gray-700">Published:</span> 
                <span className="text-right">
                  {new Date(course.publishedDate).toLocaleDateString()}
                </span>
              </p>
            </div>
            
            {/* Mobile Actions */}
            <div className="mt-5 flex justify-around gap-4 pt-4 border-t">
              <Link href={`/courses/${course._id}`} className="flex-1">
                <button className="w-full text-sm py-2 rounded-lg bg-indigo-50 text-indigo-600 font-semibold hover:bg-indigo-100 transition">
                  View
                </button>
              </Link>
              <button className="w-full text-sm py-2 rounded-lg bg-red-50 text-red-600 font-semibold hover:bg-red-100 transition">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}