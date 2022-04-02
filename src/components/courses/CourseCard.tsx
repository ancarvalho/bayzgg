import Link from "next/link"
import { CourseModel } from "../../models/CourseModel"

type CourseCardProps = {
  card: CourseModel

}

export function CourseCard({ card }: CourseCardProps) {
  return (
    <>
      <Link href={card.href}>

        <div className="py-4">
          <div className="w-full pt-[54%] sm:pt-[56%] mb-[24px] bg-center bg-cover rounded-[16px]" style={{ backgroundImage: `url(${card.image_url})` }}>

          </div>
          <div className="">
            <div className="text-lg CardTextTheme">
              {card.type}
            </div>
            <div className="text-lg font-bold CardTextTheme">
              {card.tag}

            </div>
            <div className="text-sm CardTextTheme">
              {card.title}
            </div>
          </div>
        </div>

      </Link>

    </>
  )
}