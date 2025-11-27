import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CourseCard({ course }) {

  return (
    <div
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl 
        transition-all duration-300 overflow-hidden border border-gray-100 
        flex flex-col h-full"
    >
      {/* Course Image */}
      

      <img src={course?.image} alt={course.title} className="w-full h-48 object-cover object-cover hover:scale-105 transition-transform duration-500"/>
     

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category */}
        <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-2xl w-2/3 uppercase">
          {course.category}
        </span>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold text-gray-900 line-clamp-2">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
          {course.shortDescription}
        </p>

        {/* Author + Price */}
        <div className="mt-4 flex justify-between items-center border-t pt-4">
          <div className="flex items-center gap-3">
            
            <img src={course?.instructorAvatar} alt={course.author} className="w-9 h-9 rounded-full border object-cover"/>
            <p className="text-sm font-medium text-gray-700">{course.author}</p>
          </div>

          <p className="text-2xl font-extrabold text-indigo-600">
            ${course.price}
          </p>
        </div>

        {/* Gradient Button - stays at bottom */}
        <Link href={`/courses/${course._id}`} className="mt-auto">
          <button className="mt-5 w-full text-white font-semibold py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600  cursor-pointertransition-all duration-300hover:scale-[1.03] hover:shadow-lg hover:brightness-105">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
