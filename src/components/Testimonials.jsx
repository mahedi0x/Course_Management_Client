// components/Testimonials.tsx
import React from "react";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      role: "Web Developer",
      content:
        "This platform transformed my career. The courses are practical, up-to-date, and the instructors are amazing! I landed a new job within months of completing my first course.",
      rating: 5,
      avatar: "https://img.freepik.com/free-photo/portrait-handsome-bearded-man-outside_23-2150266836.jpg?semt=ais_incoming&w=740&q=80", 
    },
    {
      name: "Michael B.",
      role: "Data Analyst",
      content:
        "I was a complete beginner in data science, but the step-by-step curriculum made it easy to learn. The community support is fantastic. Highly recommended!",
      rating: 5,
      avatar: "https://img.freepik.com/free-photo/brunet-man-wearing-checkered-shirt_273609-19684.jpg?semt=ais_hybrid&w=740&q=80",
      
    },
    {
      name: "Aisha K.",
      role: "UI/UX Designer",
      content:
        "Best investment I ever made in my education. The projects are real-world, and the feedback from mentors helped me build a strong portfolio.",
      rating: 5,
      avatar: "https://img.freepik.com/free-photo/front-view-serious-man_23-2148946212.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful students who transformed their careers with us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8">
                <div className="bg-indigo-600 p-4 rounded-full shadow-lg">
                  <Quote className="w-8 h-8 text-white rotate-180" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg text-gray-700 italic leading-relaxed mb-8">
                {t.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                  {/* <div className="w-full h-full bg-gray-200 border-2 border-dashed border-gray-400 rounded-full" /> */}
                   <img src={t.avatar} className="w-full h-full rounded-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 rounded-b-3xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}