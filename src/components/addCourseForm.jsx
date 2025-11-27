"use client";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";

export default function AddCourseForm() {
  const { data: session } = useSession();
        if (!session?.user) {
          redirect("/login");
        }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset, // ← Add reset from useForm
  } = useForm();

  const onSubmit = async (data) => {
    if (!session?.user) {
      toast.error("Please log in to add a course");
      return;
    }

    const newCourse = {
      title: data.title,
      category: data.category,
      image: data.image || "",
      author: data.author,
      duration: data.duration,
      price: parseFloat(data.price),
      shortDescription: data.short_description,
      fullDescription: data.full_description,
      publishedDate: new Date().toLocaleDateString(),
      instructorName: session.user?.name || "Anonymous",
      instructorAvatar: session.user?.image || "",
      authorEmail: session.user?.email || "",
    };

    try {
      const res = await fetch(`https://courese-managment-server.vercel.app/courses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to add course");
      }

      // Success!
      toast.success("Course added successfully!", {
        duration: 4000,
        icon: "Course",
      });

      // Reset the form to initial state
      reset();

    } catch (error) {
      console.error("Error adding course:", error);
      toast.error(error.message || "Failed to add course. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-8 md:p-12 lg:p-14">
        <div className="text-center mb-10">
        <ToastContainer />
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Add New Course
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Fill in the details to publish a new course instantly
          </p>
        </div>

        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          {/* All your fields — unchanged */}
          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Course Title</span>
            </label>
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="e.g., Complete Next.js & React Masterclass 2025"
              className="input input-bordered w-full rounded-xl focus:input-primary"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Category</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full rounded-xl"
              defaultValue=""
              disabled={isSubmitting}
            >
              <option value="" disabled>Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Cloud Computing">Cloud Computing</option>
              <option value="Business Management">Business Management</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">
                Image URL <span className="font-normal text-gray-500 text-sm">(optional)</span>
              </span>
            </label>
            <input
              {...register("image")}
              type="url"
              placeholder="https://example.com/course-thumbnail.jpg"
              className="input input-bordered w-full rounded-xl"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Author</span>
            </label>
            <input
              {...register("author", { required: true })}
              type="text"
              placeholder="e.g., Mahdi Hasan"
              className="input input-bordered w-full rounded-xl"
              disabled={isSubmitting}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Duration</span>
              </label>
              <input
                {...register("duration", { required: true })}
                type="text"
                placeholder="e.g., 18 hours"
                className="input input-bordered w-full rounded-xl"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold text-gray-700">Price ($)</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="49"
                min="0"
                className="input input-bordered w-full rounded-xl"
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Short Description</span>
            </label>
            <input
              {...register("short_description", { required: true })}
              type="text"
              placeholder="A short, catchy one-liner about your course"
              className="input input-bordered w-full rounded-xl"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Full Description</span>
            </label>
            <textarea
              {...register("full_description", { required: true })}
              rows={6}
              placeholder="Detailed course overview..."
              className="textarea textarea-bordered w-full rounded-xl resize-none"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Publish Date</span>
            </label>
            <input
              readOnly
              value={new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
              className="input input-bordered w-full bg-gray-50 cursor-not-allowed"
            />
          </div>

          {/* Submit Button with Loading State */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full text-lg font-bold rounded-xl py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Adding Course...
                </>
              ) : (
                <>
                  <span>Add Course</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}