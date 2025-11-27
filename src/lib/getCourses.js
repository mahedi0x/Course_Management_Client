export default async function getAllCourses() {
  const res = await fetch(
    `https://courese-managment-server.vercel.app/courses`
  );
  return res.json();
}
