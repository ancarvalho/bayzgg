import { GetStaticProps } from "next"
import { useState } from "react"
import { CourseCard } from "../../components/courses/CourseCard"
import { coursesData } from "../../data"
import { CourseModel } from "../../models/CourseModel"

type CoursesProps = {
  courses: CourseModel[]
}

const Courses = ({ courses }: CoursesProps) => {
  const [filteredCourses, setFilteredCourses] = useState<CourseModel[]>(courses)
  const categories: string[] = Array.from(new Set(courses.map((course) => course.tag)))

  const [activeCategory, setActiveCategory] = useState<string>("all")

  const handleFilter = (tag?: string) => {
    if (tag) {
      setFilteredCourses((_) => courses.filter((course) => course.tag === tag))
      setActiveCategory(tag)
    } else {
      setFilteredCourses(courses)
      setActiveCategory("all")
    }
  }

  const activeItem = (cat?: string) => {
    if (activeCategory === cat) {
      return "px-4 bg-blue-400/[.06] text-blue-900 rounded-[8px] whitespace-nowrap sm:whitespace-normal"
    } else {
      return "px-4 CardTextTheme rounded-[8px] whitespace-nowrap sm:whitespace-normal"
    }
  }


  return (
    <>
      <div className="BackgroundTheme">
        <div className="max-w-[1136px] mx-auto">

          <div className="sticky top-0 BackgroundTheme py-6 overflow-x-auto md:overflow-hidden ">
            <div >
              <div className="flex justify-start md:justify-center flex-nowrap sm:flex-wrap">
                <div className={activeItem("all")} >
                  <a
                    className="hover:text-blue-400"
                    onClick={() => { handleFilter() }}
                  >
                    Todos
                  </a>
                </div>
                {
                  categories.map((cat) =>
                    <div className={activeItem(cat)} key={cat}>
                      <a
                        className="hover:text-blue-400"
                        onClick={() => { handleFilter(cat) }}
                      >
                        {cat}
                      </a>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-[24px] px-[16px] gap-4">
            {/* Card */}

            {
              filteredCourses.map((course) =>
                <CourseCard key={course.image_url} card={course} />

              )
            }
          </div>
        </div>
      </div>
    </>
  )

}

export const getStaticProps: GetStaticProps = async () => {
  const courses: CourseModel[] = coursesData


  return {
    props: {
      courses,

    }
  }
}
export default Courses