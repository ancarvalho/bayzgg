import { DefaultModel } from "../../models/DefaultModel"
import { DefaultCard } from "./DefaultCard"

type DefaultCardsProps = {
  cards: DefaultModel[]
}



export function DefaultCards({ cards }: DefaultCardsProps) {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        cards.map((card) =>
          <DefaultCard key={card.href} card={card} />
        )
      }


    </div>
  )
}

