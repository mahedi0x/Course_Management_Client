export default async function getUsersCourse(email) {
  const res = await fetch(
    `https://courese-managment-server.vercel.app/courses?email=${email}`
  );
  return res.json();
}
