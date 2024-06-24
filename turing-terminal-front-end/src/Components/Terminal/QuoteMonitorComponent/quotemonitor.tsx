import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./quotemonitor.css"

function QuoteMonitor() {
    
    useDragger("quote-monitor-box");
    return(
        <div id="quote-monitor-box" className="box">
            yo
        </div>
    )
}

export default QuoteMonitor