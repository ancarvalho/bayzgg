import { HighlightModel } from "../../models/HighlightModel";
import { HighlightCard, SlideCard } from "./cards";

type HighlightsProps = {
  highlights: HighlightModel[]
}

export function Highlights({ highlights }: HighlightsProps) {
  const mainHighlight = highlights.slice(0, 1)
  const sideHighlights = highlights.slice(1, 3)
  return (
    <>
      <div className="relative col-span-2">
        <div className="pb-4 flex flex-row gap-2 items-end">
          <div className="py-2 px-4 HighlightBgTheme w-fit rounded-md">
            <svg
              className="h-10 w-fit SvgTheme"
              viewBox="0 0 506.5 875"
              width="506.5"
              height="875"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m95.517 647.7c-69.7-6.8-93.6-119.8-93.6-119.8s-30.4 249.3 150.9 331.2c-19.9-38-18.8-87.1 1.9-120.6 40.9-66.1 10.1-106 10.1-106 86.5 31 39.8 108.1 39.8 108.1s76.3-17.2 21.1-114.4 7.3-139 7.3-139-42.6 59.8 68.3 156.3l36 157.4c33.8-3.2 45.5-57.8 45.5-57.8s9.5 81-35.3 131.9c56.4-16.2 97.3-51.8 123.5-96 47.1-79.4 46.7-186.6 2.4-258.9l-2.4-3.9c-18.4-30.7-29.3-58.6-35.2-83.5-19.9-83.6 17.2-131.8 17.2-131.8-87.1 31-109.1 84.7-108.7 131.7 0.4 49.5 25.7 91.5 25.7 91.5s-73.5-16.9-83.5-91.5c-4.6-34.6 4.4-81.5 40.7-145 114.6-200.6-14.3-287.6-14.3-287.6s87.7 123.6-142.2 322.4c-45.9 39.6-76.5 76.5-96.1 110-78.2 134.2 20.9 215.3 20.9 215.3z" />
            </svg>
          </div>
          <div
            className="font-bold text-xl CardTextTheme  HighlightBgTheme p-2 rounded-md">
            Destaques
          </div>
        </div>
        <div className=" mx-auto gap-5 flex flex-col md:flex-row grid lg:grid-cols-3">

          <div className="lg:col-span-2">
            <HighlightCard
              highlight={mainHighlight[0]}
              heights={"h-[300px] md:h-[350px] lg:h-[420px] "}
            />
          </div>
          {/* Slider Parcially Showing */}
          <div className="hidden lg:flex w-full h-[420px] items-center justify-center">
            <div className="flex flex-col w-full h-full">
              {
                sideHighlights.map((highlight) =>
                  <SlideCard 
                  key={highlight.image_url} 
                  highlight={highlight} />
                )
              }
            </div>
          </div>
          {/* Grid Parcially Showing */}
          <div className="flex gap-5 sm:flex flex-col md:flex-row lg:hidden ">
            {
              sideHighlights.map((highlight) =>
                <HighlightCard
                  key={highlight.image_url}
                  highlight={highlight}
                  heights={"h-[200px]"} />
              )
            }

          </div>

        </div>
      </div>
    </>
  )
}