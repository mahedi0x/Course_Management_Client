export default async function getUsersCourse(email) {
    const res = await fetch(`http://localhost:4000/courses?email=${email}`);
    return res.json();
}

  