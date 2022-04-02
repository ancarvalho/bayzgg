import Link from "next/link";
import { GameModel } from "../../models/GameModel";

type GameCardProps = {
  game: GameModel
}



export function GameCard({ game }: GameCardProps) {
  return (
    <Link href={game.href} passHref>
      <div className="group relative py-2 px-4 flex items-center justify-between h-[120px] w-full CardBgTheme rounded-md">
        <div className="ml-2 text-center">
          <p className="font-extrabold text-xl group-hover:text-cyan-500 CardTextTheme">{game.name}</p>
        </div>
        <div className="w-fit">
          <img className="" src={game.image_url} alt="" />
        </div>
        <div className="absolute h-full w-[8px] CardGamesLBarTheme left-0 rounded-l-md"></div>

      </div>
    </Link>
  );
}