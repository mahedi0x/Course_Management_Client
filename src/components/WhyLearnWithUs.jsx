// components/WhyLearnWithUs.tsx
import React from "react";
import { GraduationCap, Award, Clock } from "lucide-react";

export default function WhyLearnWithUs() {
  const features = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Expert Mentors",
      description: "Learn from industry experts who are passionate about teaching.",
      color: "bg-gradient-to-br from-blue-500 to-indigo-600",
      shadow: "shadow-blue-500/30",
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Official Certificates",
      description: "Receive a certificate upon completion to showcase your skills.",
      color: "bg-gradient-to-br from-purple-500 to-pink-600",
      shadow: "shadow-purple-500/30",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Flexible Learning",
      description: "Learn at your own pace, anytime, anywhere. Access courses on mobile and desktop.",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
      shadow: "shadow-green-500/30",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Learn With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of students learning from the best mentors worldwide
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.color}`}
              />

              {/* Icon Circle */}
              <div
                className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center text-white mb-8 mx-auto shadow-2xl transform group-hover:scale-110 transition-transform duration-500 ${feature.shadow}`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom Glow Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}