'use client';

import React, { useState, useMemo } from 'react';
import CourseCard from '@/components/CourseCard';
import { Search } from 'lucide-react'; // Optional: add lucide-react for the icon

export default function ClientCourses({ initialCourses }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Extract unique categories
  const categories = ['All', ...new Set(initialCourses.map(c => c.category))];

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(search.toLowerCase());

      const matchesCategory = category === 'All' || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category, initialCourses]);

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Hero Title - Exactly like your design */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find your next learning opportunity from our curated selection of expert-led courses.
          </p>
        </div>

        {/* Search + Category Filter - Perfect match to your screenshot */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center mx-auto">
          <input
            type="text"
            placeholder="Search courses..."
            className="input input-bordered w-full md:w-1/2 bg-white"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
          <select
            className="select select-bordered w-full md:w-1/4 bg-white"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setCurrentPage(1);
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        {filteredCourses.length > 0 && (
          <p className="text-center text-gray-600 mb-10 text-lg">
            Showing <strong>{filteredCourses.length}</strong> course{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        )}

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {paginatedCourses.map((course) => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>

        {/* Empty State */}
        {paginatedCourses.length === 0 && (
          <div className="text-center py-24">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 border-2 border-dashed rounded-3xl opacity-70" />
            <p className="text-2xl font-medium text-gray-600">No courses found.</p>
            <p className="text-gray-500 mt-3">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`w-12 h-12 rounded-full font-medium transition ${
                  currentPage === i + 1
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}