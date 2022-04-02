import Link from "next/link";
import { HighlightModel } from "../../../models/HighlightModel";

type HighlightCardProps = {
  highlight: HighlightModel
  heights: string
}



export function HighlightCard({ highlight, heights }: HighlightCardProps) {
  return (

    <Link
      href={highlight.href}
      passHref
    >
      <div
        className={`relative w-full ${heights} rounded-md overflow-hidden bg-cover bg-center group`}
        style={{ backgroundImage: `url(${highlight.image_url})` }}
      >
        <div className="flex items-end h-full pb-4">
          <div className="px-4 max-w-xl">
            <h2 className="text-lg p-1  font-semibold CardHighlightBgTheme w-fit rounded-lg CardTextTheme">{highlight.tag}</h2>
            <span className="text-lg mt-2 p-1 CardTextBgTheme w-fit group-hover:bg-red-500 dark:group-hover:bg-red-600 rounded-lg CardTextTheme"> {highlight.description} </span>
          </div>
        </div>
        <div className="absolute h-full w-[8px] CardHighlightLBarTheme left-0 top-0 rounded-l-md"></div>
      </div>

    </Link>

  );
}