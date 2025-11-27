export default async function getLatestCourses() {
  const res = await fetch(
    `https://courese-managment-server.vercel.app/latest-courses`
  );
  return res.json();
}
