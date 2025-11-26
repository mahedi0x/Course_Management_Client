import courseDetails from "@/lib/coourseDetails";
import React from "react";

export default async function CourseDetails({params}) {
  const {id} = await params;
  const course =await courseDetails(id);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header / Breadcrumbs (Optional) */}
        <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <span>Home</span> / <span>Courses</span> /{" "}
          <span className="text-indigo-600 font-semibold">{course.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LEFT SIDE: Main Content (Image, Title, Description) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Course Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Course Info */}
            <div>
              {/* Category Badge */}
              <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide">
                {course.category}
              </span>

              {/* Title */}
              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                {course.title}
              </h1>

              {/* Short Description */}
              <p className="mt-4 text-xl text-gray-600 font-medium">
                {course.shortDescription}
              </p>

              {/* Author Info */}
              <div className="mt-6 flex items-center gap-4 border-t border-b border-gray-100 py-6">
                <img
                  src={course.authorImage}
                  alt={course.author}
                  className="w-14 h-14 rounded-full border-2 border-indigo-500 p-0.5"
                />
                <div>
                  <p className="text-sm text-gray-500">Created by</p>
                  <p className="text-lg font-bold text-gray-900">
                    {course.author}
                  </p>
                </div>
                <div className="ml-auto text-sm text-gray-500 hidden sm:block">
                  Last Updated: {course.publishedDate}
                </div>
              </div>

              {/* Full Description Section */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About this Course
                </h2>
                <div className="prose prose-indigo max-w-none text-gray-600 leading-relaxed">
                  <p>{course.fullDescription}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sticky Sidebar (Price, Enrollment) */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              
              {/* Price */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-5xl font-extrabold text-indigo-600">
                  ${course.price}
                </span>
                <span className="text-gray-400 line-through text-xl">
                  ${course.price + 50}
                </span>
              </div>

             

              {/* Course Features List */}
              <div className="mt-8 space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">
                  This course includes:
                </h3>
                
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{course.duration} on-demand video</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                    <span>15+ Downloadable resources</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center gap-3">
                     <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    <span>Access on mobile and TV</span>
                  </li>
                </ul>
              </div>
              <div className="mt-10 pt-6 border-t border-gray-100 text-center">
                 {/* <p className="text-xs text-gray-400">30-Day Money-Back Guarantee</p> */}
              </div>

               {/* Action Buttons */}
               <div className="flex flex-col gap-4">
                <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                  Enroll Now
                </button>
                <button className="w-full bg-white border-2 border-indigo-100 text-indigo-600 font-bold text-lg py-3 rounded-xl hover:bg-indigo-50 transition-all duration-300">
                  Add to Wishlist
                </button>
              </div>

              

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}