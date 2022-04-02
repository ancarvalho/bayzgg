import Link from "next/link"
import { HighlightModel } from "../../../models/HighlightModel"

type SlideCardProps = {
  highlight: HighlightModel
}



export function SlideCard({ highlight }: SlideCardProps) {
  return (
    <Link href={highlight.href}>
      <div
        className="group bg-1 relative flex-auto bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-[5]"
        style={{ backgroundImage: `url(${highlight.image_url})` }}>
        <div className="group-hover:visible absolute group-hover:left-[4%] group-hover:top-1/4 top-3/4 pl-1 transition ease-out CardHighlightBgTheme group-hover:scale-125 duration-30 CardTextTheme font-bold text-lg">
          {highlight.tag}
        </div>
        <div className="invisible flex h-fit items-center w-5/6 group-hover:visible absolute bottom-[10%] left-[8.2%] transition ease-out group-hover:scale-[115%] CardTextBgTheme duration-300 CardTextTheme">
          <span className="flex text-center">
            {highlight.description}
          </span>
        </div>
      </div>
    </Link>
  )
} 