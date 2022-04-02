import { HighlightModel } from "../../models/HighlightModel"
import { HighlightCard } from "./HighlightCard"

type SideBarProps = {
  highlights: HighlightModel[]
}

export function SideBar({ highlights }: SideBarProps) {
  return (
    <div className="hidden p-2  md:block md:col-span-1">
      <div className="w-full pb-8">
        <img
          className="rounded-md"
          src="https://bayz.gg/wp-content/themes/soma/img/360x140b.png"
          alt="" />
      </div>
      <div className="text-lg text-black dark:text-white">
        Destaques
      </div>
      <div className="pt-4">
        <ul className="flex flex-col gap-4 text-black dark:text-white">
          {
            highlights.map((highlight) => 
            <HighlightCard key={highlight.image_url} card={ highlight}/>
            )
          }
        </ul>


      </div>
    </div>
  )
}