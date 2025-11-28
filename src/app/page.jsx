import Hero from "@/components/HeroSection";
import WhyLearnWithUs from '@/components/WhyLearnWithUs';
import Testimonials from '@/components/Testimonials';
import LatestCourses from "./latestCourses/page";


export default function Home() {
  return (
    <div className="">
      <Hero></Hero>
      <LatestCourses></LatestCourses>
      <WhyLearnWithUs></WhyLearnWithUs>
      <Testimonials></Testimonials>
    </div>
  );
}
