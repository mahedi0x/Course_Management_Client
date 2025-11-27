import useSWR from 'swr'
import Hero from "@/components/HeroSection";
import LatestCourses from "@/components/LatestCourses";
import WhyLearnWithUs from '@/components/WhyLearnWithUs';
import Testimonials from '@/components/Testimonials';

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
