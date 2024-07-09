'use client';
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;  // Add the image field here
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient
                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm"
              >
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <Image
                    src={course.image}
                    alt={course.title}
                    height={250}
                    width={250}
                    className="object-cover rounded-md mb-4"  // Adjust size and styling as needed
                  />
                  <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                  {/* Button Section */}
                  <button className="rounded-full px-6 py-2 text-white flex items-center space-x-2 bg-black mt-4 text-sm font-bold dark:bg-zinc-800 hover:bg-gray-800 transition duration-200">
                    <span>Buy Now</span>
                    <span className="bg-zinc-700 rounded-full text-xs px-2 py-0 text-white">
                     {course.price}
                    </span>
                  </button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link href="/courses">
          <button className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;