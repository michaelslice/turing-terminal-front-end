import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./timeandsales.css"

function TimeAndSales() {
    
    useDragger("time-and-sales-box");
    return(
        <div id="time-and-sales-box" className="box">
            yo
        </div>
    )
}

export default TimeAndSales