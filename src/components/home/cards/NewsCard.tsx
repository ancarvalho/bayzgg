import Link from "next/link";
import { NewsModel } from "../../../models/NewsModel";

type NewsCardProps = {
  card: NewsModel
}



export function NewsCard({ card }: NewsCardProps) {
  return (
    <Link href={card.href}>
      <div
        className="relative w-full h-[200px]  duration-300 ease-in-out transition-transform transform hover:-translate-y-2"
      >

        <div
          className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover rounded-md"
          style={{ backgroundImage: `url(${card.image_url})` }}
          title={`${card.title}`}
        >
          <div className="flex items-end h-full pb-4">
            <div className="px-4">
              <h2 className="p-0.5 text-yellow-700 dark:text-yellow-300 font-semibold CardTextBgTheme w-fit rounded-sm">{card.tag}</h2>
              <span className="p-0.5 mt-2 CardTextTheme CardTextBgTheme w-fit rounded-md"> {card.title} </span>

            </div>
          </div>
          <div className="absolute h-full w-[8px] CardNewsLBarTheme left-0 top-0 rounded-l-md"></div>
        </div>



      </div>
    </Link>



  );
}