import { GetStaticProps } from "next"
import { Games } from "../../components/shared/Games"
import { gamesData } from "../../data"
import { GameModel } from "../../models/GameModel"

type GamesProps = {
  games: GameModel[]
}

const GamesPage = ({ games }: GamesProps) => {

  return (
    <>
      <div className="BackgroundTheme">
        <div className="pb-8 px-4 xl:px-0 max-w-[1136px] mx-auto">
          <Games games={games} />
        </div>

      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const games: GameModel[] = gamesData

  return {
    props: {
      games
    }
  }
}

export default GamesPage