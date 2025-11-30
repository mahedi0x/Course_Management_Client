import Link from "next/link";
import { ArrowRight, BookOpen, Users, Award, PlusCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-100 via-white to-indigo-100 ">
      {/* Optional subtle wave background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="absolute bottom-0 left-0 w-full h-48 text-indigo-100"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <BookOpen className="w-10 h-10" />
            {/* <span>The #1 Platform for Course Creators</span> */}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Build, Launch & Manage
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Your Online Courses
            </span>
            With Ease
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Create beautiful, interactive courses in minutes. Reach thousands of students with a modern platform built for educators and creators.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-3 bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="/add-courses"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 font-semibold px-8 py-4 rounded-xl border-2 border-indigo-600 hover:bg-indigo-50 transition-all shadow-md"
            >
              <PlusCircle className="w-5 h-5" />
              Start Creating Free
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-indigo-600" />
              <span className="text-sm">10,000+ Students</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6 text-indigo-600" />
              <span className="text-sm">500+ Courses Published</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <span className="text-sm">Rated 4.9/5 by Creators</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}