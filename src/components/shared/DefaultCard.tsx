import { DefaultModel } from "../../models/DefaultModel"
import { GetChain } from "../utils/chains"

type DefaultCardProps = {
  card: DefaultModel
}



export function DefaultCard({ card }: DefaultCardProps) {
  const date = new Date(card.end_date)

  return (
    <>

      <div className="h-[350px] p-1 shadow-xl rounded-2xl bg-gradient-to-r from-blue-400 to-blue-700">
        <div className="relative h-full CardBgTheme rounded-xl">

          <div className="absolute top-0 flex flex-col p-6 sm:p-8 ">

            <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
              {card.type}
            </p>
            <a href={card.website} target="_blank">
              <div className="flex items-center gap-1">
                <svg
                  className="h-5 w-5 SvgTheme"
                  width="875.1"
                  height="868.5"
                  viewBox="0 0 875.1 868.5"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg" >
                  <path d="m745.7 432.8h-67c-11.6 0-21 9.4-21 21v280.2c0 11.6-9.4 21-21 21h-503.4c-11.6 0-21-9.4-21-21v-505c0-11.6 9.4-21 21-21h280.6c11.6 0 21-9.4 21-21v-65.3c0-11.6-9.4-21-21-21h-392.9c-11.6 0-21 9.4-21 21v725.8c0 11.6 9.4 21 21 21h724.7c11.6 0 21-9.4 21-21v-393.7c0-11.6-9.4-21-21-21zm16.1-432.8h-249.3c-8.3 0-15 6.7-15 15v83.3c0 8.3 6.7 15 15 15h127.1c8.3 0 10.2 4.7 4.4 10.6l-211.4 211.4c-5.9 5.9-5.9 15.3 0 21.2l85.6 85.6c5.9 5.9 15.4 5.9 21.2 0l211.8-211.8c5.9-5.9 10.6-3.9 10.6 4.4v127.9c0 8.3 6.7 15 15 15h83.3c8.3 0 15-6.7 15-15v-362.5c-0.1-0.1-113.3-0.1-113.3-0.1z" />
                </svg>

                <span className="text-xl font-bold CardTextTheme hover:text-sky-500 py-2">
                  {card.name}
                </span>
              </div>

            </a>

          </div>
          <div className="absolute top-36 px-6 sm:px-8">
            <div className="flex flex-rows items-center">
              <p className="text-sm CardTextTheme pr-2">
                Chain:
              </p>
              {
                GetChain({ chain: card.chain })
              }
            </div>
            <div className="py-2">
              <p className="text-sm CardTextTheme">
                Data limite:
              </p>
              <p className="text-base font-medium text-gray-600 dark:text-gray-300">
                {date.toLocaleDateString()}
              </p>
            </div>

            <a href={card.whitepaper_link} target="_blank">
              <div className="flex items-center gap-1">
                <svg
                  className="h-4 w-4 SvgTheme"
                  width="875.1"
                  height="868.5"
                  viewBox="0 0 875.1 868.5"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg" >
                  <path d="m745.7 432.8h-67c-11.6 0-21 9.4-21 21v280.2c0 11.6-9.4 21-21 21h-503.4c-11.6 0-21-9.4-21-21v-505c0-11.6 9.4-21 21-21h280.6c11.6 0 21-9.4 21-21v-65.3c0-11.6-9.4-21-21-21h-392.9c-11.6 0-21 9.4-21 21v725.8c0 11.6 9.4 21 21 21h724.7c11.6 0 21-9.4 21-21v-393.7c0-11.6-9.4-21-21-21zm16.1-432.8h-249.3c-8.3 0-15 6.7-15 15v83.3c0 8.3 6.7 15 15 15h127.1c8.3 0 10.2 4.7 4.4 10.6l-211.4 211.4c-5.9 5.9-5.9 15.3 0 21.2l85.6 85.6c5.9 5.9 15.4 5.9 21.2 0l211.8-211.8c5.9-5.9 10.6-3.9 10.6 4.4v127.9c0 8.3 6.7 15 15 15h83.3c8.3 0 15-6.7 15-15v-362.5c-0.1-0.1-113.3-0.1-113.3-0.1z" />
                </svg>

                <div className="CardTextTheme hover:text-sky-500">
                  Whitepaper
                </div>
              </div>

            </a>
          </div>
          <div className="absolute  bottom-4 left-1/2 transform -translate-x-1/2">
            <a
              href={card.href}
              target="_blank"
              className=""
            >
              <div className="w-full CardTextTheme bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                IDO Link
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  )

}