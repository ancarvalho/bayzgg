import { EventModel } from "../../models/EventModel";
import { CalendarCard } from "./CalendarCard";

type CalendarDayProps = {

  date: string
  events: EventModel[]

}




export function CalendarDay({ date, events }: CalendarDayProps) {
  const d = new Date(date)
  
  return (
    <>

      <div className="pb-4">
        <div className="flex flex-row justify-center items-center">
          <div className="w-1/3 h-2 CardBgTheme"></div>
          <p className="font-bold text-4xl p-1 CardTextTheme">{d.getDate()}</p>
          <div className="w-1/3 h-2 CardBgTheme"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-4 gap-4">
          {
            events.map((event) => 
            <CalendarCard key={`${event.date+event.description+event.project_name}`} card={event}/>
            )
          }
    
        </div>
      </div>
    </>
  )
}