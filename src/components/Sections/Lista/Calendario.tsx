import { Calendar } from '@/components/ui/calendar'
import React from 'react'

export function Calendario() {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
        <div className='border-width: 0px'>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border-0"
            />
        </div>

    )

}


 

