import { NewsModel } from "../../models/NewsModel"
import { NewsCard } from "./cards/NewsCard"

type NewsProps = {
  news: NewsModel[]
}

export function News({ news }: NewsProps) {
  return (
    <>
      <div className="pt-8">

        <div className="pb-4 flex flex-row gap-2 items-end">
          <div className="p-2 NewsBgTheme w-fit rounded-md">
            <svg
              className="h-8 w-fit SvgTheme"
              viewBox="0 0 874.9 710.9"
              width="874.9"
              height="710.9"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m765.5 95v-80.7c0-7.9-6.4-14.3-14.3-14.3h-736.9c-7.9 0-14.3 6.4-14.3 14.3v587.3s0 109.3 109.3 109.3h683.5s82.1-1.7 82.1-109.3v-478c0-7.9-6.4-14.3-14.3-14.3h-80.9c-7.8 0-14.2-6.4-14.2-14.3zm-710.7 506.6v-532.6c0-7.9 6.4-14.3 14.3-14.3h627.6c7.9 0 14.3 6.4 14.3 14.3v532.5c0 18 4 32 10.1 43 3.9 6.9 1.9 11.6-6 11.6h-605.8c-54.5 0-54.5-54.5-54.5-54.5zm68.8-437.5h518.2c7.9 0 14.3 6.4 14.3 14.3v26c0 7.9-6.4 14.3-14.3 14.3h-518.2c-7.9 0-14.3-6.4-14.3-14.3v-26c0-7.9 6.4-14.3 14.3-14.3zm300.8 328h162.9c7.9 0 14.3 6.4 14.3 14.3v26.2c0 7.9-6.4 14.3-14.3 14.3h-162.9c-7.9 0-14.3-6.4-14.3-14.3v-26.2c0-7.9 6.4-14.3 14.3-14.3zm0-109.4h217.4c7.9 0 14.3 6.4 14.3 14.3v26.2c0 7.9-6.4 14.3-14.3 14.3h-217.4c-7.9 0-14.3-6.4-14.3-14.3v-26.2c0-7.9 6.4-14.3 14.3-14.3zm0-109.3h217.4c7.9 0 14.3 6.4 14.3 14.3v26.2c0 7.9-6.4 14.3-14.3 14.3h-217.4c-7.9 0-14.3-6.4-14.3-14.3v-26.2c0-7.9 6.4-14.3 14.3-14.3zm-300.8 0h217.4c7.9 0 14.3 6.4 14.3 14.3v244.8c0 7.9-6.4 14.3-14.3 14.3h-217.4c-7.9 0-14.3-6.4-14.3-14.3v-244.8c0-7.9 6.4-14.3 14.3-14.3z" />
            </svg>
          </div>
          <div
            className="font-bold text-xl NewsBgTheme p-2 rounded-md CardTextTheme">
            Noticias
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full">

          {
            news.map((i) =>
              <NewsCard key={`News-${i.image_url}`} card={i} />

            )
          }

        </div>
      </div>
    </>
  )
}