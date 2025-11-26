export default async function courseDetails(courseId) {
    const res = await fetch(`http://localhost:4000/courses/${courseId}`);
    return res.json();
  }
  