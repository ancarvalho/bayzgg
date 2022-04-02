import Link from "next/link";
import { EventModel } from "../../models/EventModel";
import { extractDate } from "../utils/dayAndDate";
import { extractMonth } from "../utils/yearAndDate";

type CalendarCardProps = {
  card: EventModel
}




export function CalendarCard({ card }: CalendarCardProps) {

  const date = new Date(card.date)
  const dateISO = date.toISOString().replace(/[^\w\s]/gi, "")
  return (
    <>
      <div className="h-[200px]">

        <div className="relative h-full CardBgTheme shadow-xl rounded-xl">
          <div className="flex flex-row h-[50px] CardCalendarBgTheme hover:bg-blue-600 rounded-xl">
            <div className="flex justify-center rounded-t-xl bg-gray-400 dark:bg-gray-800 items-center w-3/5 ">
              <p className="CardTextTheme text-xl font-bold">
                {extractMonth(date).toUpperCase()}

              </p>
            </div>

            <a
              href={`https://calendar.google.com/calendar/u/0/r/eventedit?text=${card.description}&dates=${dateISO}/${dateISO}&details=${card.project_name}&location&trp=false&sprop&sprop=name:`}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center rounded-t-lg items-center w-2/5 CardCalendarBgTheme hover:bg-blue-600">
              <div className="flex items-center">
                <div className="CardTextTheme font-medium text-semibold text-center uppercase">
                  Lembrete
                </div>
                <svg
                  className="h-5 w-5 pl-2 SvgTheme"
                  width="875"
                  height="875"
                  viewBox="0 0 875 875"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"  >

                  <path
                    d="m437.7 0c-241.8 0-437.7 195.9-437.7 437.3 0 241.8 195.9 437.7 437.7 437.7 241.4 0 437.3-195.9 437.3-437.7 0-241.4-195.9-437.3-437.3-437.3zm301.6 466.5c-0.7 9-2.2 19.1-4.7 30.3h-237.7v237.8c-11.2 2.5-21.6 4.3-31.4 5.1-9.7 0.7-19.8 1.1-30.3 1.1-9 0-17.7-0.4-26.7-1.1s-19.1-2.5-30.3-5.1v-237.7h-237.5c-2.5-11.2-4.3-21.7-5.1-31.4-0.7-9.7-1.1-19.8-1.1-30.3 0-9 0.4-17.7 1.1-26.7s2.5-19.1 5.1-30.3h237.4v-237.5c11.2-2.5 21.6-4 31.4-4.7 9.7-1.1 19.8-1.4 30.3-1.4 9 0 18 0.4 26.7 1.4 9 0.7 19.1 2.2 30.3 4.7v237.4h237.8c2.5 11.2 4 21.6 4.7 31.4 1.1 9.7 1.4 19.8 1.4 30.3 0.1 9.1-0.3 18.1-1.4 26.7z" />
                </svg>
              </div>
            </a>
          </div>

          <div className="absolute top-8 flex flex-col p-6 sm:p-8 ">
            <p className="text-lg font-bold CardTextTheme">
              {card.project_name}
            </p>

            <span className="text-xl font-bold CardTextTheme py-2">
              {card.description}
            </span>


          </div>
          <div className="absolute bottom-2 pl-6 sm:pl-8">
            <p className="text-base font-medium text-gray-700 dark:text-gray-400">
              {date.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}