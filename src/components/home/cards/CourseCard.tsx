import Link from "next/link";
import { CourseModel } from "../../../models/CourseModel";

type CourseCardProps = {
  course: CourseModel
}



export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={course.href}
      passHref
    >
      <div className="w-full h-[200px]">
        <div
          className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover rounded-md"
          style={{ backgroundImage: `url(${course.image_url})` }}
          title={`${course.title}`}
        >
        </div>
      </div>

    </Link>
  );
}