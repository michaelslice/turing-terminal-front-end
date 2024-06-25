import Calendar from "react-calendar"

function CalenderFirstDisplay({onDateChange}:any) {

    const handleDataChange = (date:any) => {onDateChange(date)}

    return(
        <div >
            <Calendar 
                className="calendar-start"
                onChange={handleDataChange}>
                    
            </Calendar>
        </div>
    )
}

export default CalenderFirstDisplay