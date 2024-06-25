import Calendar from "react-calendar"

function CalenderEndDisplay({onDateChange}:any) {

    const handleDataChange = (date:any) => {onDateChange(date)}

    return(
        <div >
            <Calendar 
                className="calendar-end"
                onChange={handleDataChange}>
                    
            </Calendar>
        </div>
    )
}

export default CalenderEndDisplay