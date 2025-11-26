export default async function getLatestCourses() {
    const res = await fetch(`http://localhost:4000/latest-courses`);
    return res.json();
  }
  