import { GameModel } from "../../models/GameModel"
import { GameCard } from "./GameCard"

type GamesProps = {
  games: GameModel[]
}

export function Games({ games }: GamesProps) {
  return (
    <>
      <div className="pt-8">
        <div className="pb-4 flex flex-row gap-2 items-end ">
          <div className="p-2 GamesBgTheme w-fit rounded-md  ">
            <svg
              className="h-10 w-fit SvgTheme"
              viewBox="0 0 999.39 999.95"
              width="999.39"
              height="999.95"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="m814.93 726.2c-9.3 0-16.8 7.6-16.8 16.9 0 9.4 7.5 16.8 16.8 16.8 9.2 0 16.8-7.5 16.8-16.8s-7.6-16.9-16.8-16.9zm0-152c-9.3 0-16.8 7.6-16.8 16.8 0 9.3 7.5 16.9 16.8 16.9 9.2 0 16.8-7.6 16.8-16.9 0-9.2-7.6-16.8-16.8-16.8zm-150.8 118.2c-9.3 0-16.8 7.6-16.8 16.9s7.5 16.8 16.8 16.8c9.2 0 16.7-7.6 16.7-16.8 0.1-9.3-7.5-16.9-16.7-16.9zm0-151.9c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.9 16.8 16.9c9.2 0 16.7-7.6 16.7-16.9s-7.5-16.8-16.7-16.8zm317.8 70.2c-48.6-179.4-183.3-299.4-300.9-268.2-44.8 12-116.9 42-167.7 45.5v-50.2h-0.1c0.1-2.9 0.1-5.4 0.1-8.4 0-51.3-41.2-92.9-92.1-92.9h-134.1c-32.4 0-58.6-26.4-58.6-59.1 0-32.6 26.3-59.1 58.6-59.1h192.7c18.6 0 33.5-15.1 33.5-33.8v-67.7c0-9.2-7.5-16.8-16.8-16.8s-16.8 7.6-16.8 16.8v33.8c0 33.4-1.4 33.8-33.5 33.8h-159.1c-50.8 0-92.2 41.6-92.2 92.9s41.3 92.9 92.2 92.9h134.1c32.4 0 58.6 26.4 58.6 59.1 0 3 0.1 5.5 0.2 8.4h-0.2v50.4c-50.2-3.6-121.3-33.7-165.4-45.6-116.2-31.4-249.2 89.3-297.2 269.5-47.9 180.2 7.5 351.6 123.7 383 86.7 23.4 182.6-38 245.7-145.4 34.8 7.4 71.6 11.6 109.9 11.6 38.8 0 76.1-6.7 111.3-14.1 63.9 107 161.1 168.1 248.8 144.8 117.8-31.2 173.8-201.9 125.3-381.2zm-652.9 31h-67v67.6c0 9.3-7.5 16.8-16.8 16.8s-16.7-7.6-16.7-16.8v-67.6h-67c-9.2 0-16.8-7.5-16.8-16.8s7.6-16.9 16.8-16.9h67v-67.5c0-9.4 7.5-16.9 16.7-16.9 9.3 0 16.8 7.6 16.8 16.9v67.5h67c9.3 0 16.8 7.6 16.8 16.9s-7.6 16.8-16.8 16.8zm335.1 118.3c-27.7 0-50.3-22.7-50.3-50.7s22.5-50.7 50.3-50.7 50.3 22.7 50.3 50.7c0 27.9-22.5 50.7-50.3 50.7zm0-152c-27.7 0-50.3-22.7-50.3-50.6 0-28 22.5-50.7 50.3-50.7s50.3 22.7 50.3 50.7c0 27.9-22.5 50.6-50.3 50.6zm150.8 185.8c-27.8 0-50.3-22.7-50.3-50.7s22.4-50.7 50.3-50.7c27.7 0 50.3 22.7 50.3 50.7s-22.5 50.7-50.3 50.7zm0-152.1c-27.8 0-50.3-22.7-50.3-50.7 0-27.9 22.4-50.6 50.3-50.6 27.7 0 50.3 22.7 50.3 50.6 0 28.1-22.5 50.7-50.3 50.7z" />
            </svg>
          </div>
          <div
            className="font-bold text-xl GamesBgTheme p-2 rounded-md CardTextTheme">
            Jogos
          </div>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {
            games.map((i) =>
              <GameCard key={`Game-${i.image_url}`} game={i} />

            )
          }

        </div>
      </div>

    </>
  )
}