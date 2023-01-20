import { generateDatesFromYearBeginnings } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"

const weekDays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S'
]

const SummaryDates = generateDatesFromYearBeginnings()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill =  minimumSummaryDatesSize - SummaryDates.length

export function SummaryTable() {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDays, i) => {
                    return (
                        <div 
                        key={`${weekDays}-${i}`}
                        className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
                        >
                        {weekDays}
                        </div>

                    )
                })}
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3" >
                {SummaryDates.map(date => {
                    return <HabitDay key={date.toString()} />
                })}


                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill}).map((_, i) =>{
                    return(
                        <div
                        key={i} 
                        className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                        />
                    )
                })}
            </div>
        </div>
    )
}