import getLatestCourses from "@/lib/latestCourses";
import React from "react";
import CourseCard from "./CourseCard";

const LatestCourses = async () => {
  const latestCourses = await getLatestCourses();
  console.log(latestCourses);
  return (
    <div>
      <div className="max-w-7xl mx-auto my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 px-3">
          {latestCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestCourses;
