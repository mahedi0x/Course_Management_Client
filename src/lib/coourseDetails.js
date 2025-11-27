export default async function courseDetails(courseId) {
  const res = await fetch(
    `https://courese-managment-server.vercel.app/courses/${courseId}`
  );
  return res.json();
}
