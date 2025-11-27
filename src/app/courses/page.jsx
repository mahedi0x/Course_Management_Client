import ClientCourses from '@/components/ClientCourses';
import getAllCourses from '@/lib/getCourses';


export default async function CoursesPage() {
  const courses = await getAllCourses();

  return <ClientCourses initialCourses={courses} />;
}