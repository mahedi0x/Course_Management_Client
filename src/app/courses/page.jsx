import React from 'react';
import CourseCard from '@/components/CourseCard';
import getAllCourses from '@/lib/getCourses';
const Courses = async () => {
  const courses = await getAllCourses();
  // console.log(courses)

    return (
        <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;