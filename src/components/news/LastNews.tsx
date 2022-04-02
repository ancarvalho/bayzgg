import Link from "next/link";
import { NewsModel } from "../../models/NewsModel";

type LastNewsProps = {
  card: NewsModel
}



export function LastNews({ card }: LastNewsProps) {
  return (
    <>
      <Link href={card.href}>
        <div className="group relative flex flex-row h-[130px] ">
          <div className="ml-44 sm:ml-[215px] pt-1">

            <span className="CardTextTheme text-lg font-bold group-hover:underline hover:underline">
              {card.title}
            </span>
            <div className="CardTextTheme text-sm ">
              {card.tag}
            </div>
          </div>
          <div
            className="absolute h-full w-40 sm:w-52 bg-center bg-cover rounded-lg"
            style={{ backgroundImage: `url(${card.image_url})` }}
          >
          </div>
        </div>
      </Link>

    </>


  );
}