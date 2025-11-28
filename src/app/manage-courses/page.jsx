"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import getUsersCourse from "@/lib/getUsersCourse";
import ManageCourseTable from "@/components/ManageCourseTable";

export default function ManageCourses() {
  const { data: session } = useSession();
  const [courses, setCourses] = useState([]);
//   console.log(courses)

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchCourses = async () => {
      const data = await getUsersCourse(session?.user?.email);
      setCourses(data);
    };

    fetchCourses();
  }, [session]);

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50">
           
            <div className="max-w-7xl mx-auto">
      
                <div className="mb-1 p-6 bg-white rounded-xl shadow-md border-t-4 border-indigo-600">
                    <h2 className="text-4xl text-center sm:text-5xl font-extrabold text-gray-900 mb-2">
                        Manage Your Courses
                    </h2>
                </div>
                <ManageCourseTable courses={courses} />

            </div>
        </div>
  );
}
