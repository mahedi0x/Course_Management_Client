// app/instructors/page.tsx
import Link from "next/link";
import { Star, BookOpen, Users, Calendar } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Web Developer",
    image: "https://mentalhealthfirstaid.org/app/uploads/2025/10/Teach-MHFA_Hero-2.webp",
    bio: "10+ years of experience in React, Next.js & Fullstack Development. Teaching 50k+ students worldwide.",
    expertise: "React, Next.js, TypeScript",
    courses: 12,
    students: 48500,
    rating: 4.9,
    joined: "2021",
  },
  {
    id: 2,
    name: "Mahedi Hasan",
    title: "Fullstack MERN Developer",
    image: "https://i.ibb.co.com/wNfVb7zs/Red-Modern-Formal-Facebook-Profile-Picture.png",
    bio: "Passionate about teaching complete web development from zero to hero.  Built 200+ production Website used by millions.",
    expertise: "MongoDB, Express, React, Nodejs, NextJS",
    courses: 18,
    students: 89200,
    rating: 4.9,
    joined: "2020",
  },
  {
    id: 3,
    name: "Emma Wilson",
    title: "Backend & Node.js Specialist",
    image: "https://img.freepik.com/free-photo/young-dark-haired-man-glasses-is-standing-near-whiteboard-office-he-wears-blue-shirt-dark-jacket-he-is-smiling-showing-sign-camera_197531-551.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "Ex-Amazon engineer. Teaching scalable backend architecture & system design and Teaching 50k+ students worldwide.",
    expertise: "Node.js, MongoDB, AWS",
    courses: 10,
    students: 28900,
    rating: 4.8,
    joined: "2021",
  },
  {
    id: 4,
    name: "David Park",
    title: "Data Science & Python Guru",
    image: "https://media.istockphoto.com/id/1219864353/photo/pensive-middle-eastern-programmer-in-office.jpg?s=612x612&w=0&k=20&c=c5YUKyprfpZj7DyirVRTaq0PAp9FYfQRTreyoOUrt10=",
    bio: "PhD in Machine Learning. Making complex topics simple and fun.",
    expertise: "Python, ML, Data Science",
    courses: 15,
    students: 67200,
    rating: 4.9,
    joined: "2020",
  },
  {
    id: 5,
    name: "Lisa Martinez",
    title: "Mobile App Developer",
    image: "https://static.vecteezy.com/system/resources/thumbnails/050/808/837/small/portrait-of-smiling-male-teacher-in-a-class-at-elementary-school-looking-at-camera-photo.jpeg",
    bio: "React Native expert. Built 20+ production apps used by millions.",
    expertise: "React Native, Flutter, iOS/Android",
    courses: 9,
    students: 41300,
    rating: 4.7,
    joined: "2022",
  },
  {
    id: 6,
    name: "Michael Chen",
    title: "UI/UX Design Expert",
    image: "https://media.istockphoto.com/id/918805736/photo/portrait-of-hispanic-male-high-schools-teacher.jpg?s=612x612&w=0&k=20&c=uVkWd6146zUOk8CoysFcaI4fNF60zG-dRP_dd1r860c=",
    bio: "Award-winning designer. Helped 100+ startups build beautiful products and lead multiple company.",
    expertise: "Figma, UI/UX, Design Systems",
    courses: 8,
    students: 32100,
    rating: 5.0,
    joined: "2022",
  }
  
];

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our Expert Instructors
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Learn from industry leaders who have trained over 300,000+ students worldwide
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 border border-gray-100"
            >
              {/* Instructor Image */}
              <div className="relative h-65 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
    
                {/* পরে ছবি থাকলে এভাবে করো */}
                <img src={instructor.image} alt={instructor.name} fill className="w-full object-cover absolute inset-0 border-4 border-dashed border-gray-400 rounded-t-3xl" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
                  <h3 className="text-3xl font-bold">{instructor.name}</h3>
                  <p className="text-lg opacity-90">{instructor.title}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-8">
                <p className="text-gray-700 mb-3 leading-relaxed">
                  {instructor.bio}
                </p>

                <div className="space-y-3 text-sm">
                  <div classBookOpen className="flex items-center gap-3 text-gray-600">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <span className="font-semibold">{instructor.courses}</span> Courses
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">{instructor.students.toLocaleString()}+</span> Students
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{instructor.rating}</span> Rating
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Teaching since {instructor.joined}
                  </div>
                </div>

                <div className="mt-2 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-1">Specializes in:</p>
                  <p className="text-indigo-600 font-medium">
                    {instructor.expertise}
                  </p>
                </div>

                <Link href={`/instructors/${instructor.id}`}>
                  <button className="w-full mt-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-xl transition transform hover:scale-105">
                    View All Courses →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}