export default async function getAllCourses() {
    const res = await fetch(`http://localhost:4000/courses`);
    return res.json();
  }
  