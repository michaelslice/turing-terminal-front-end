import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./financials.css"

function Financials() {
    
    useDragger("financials-box");
    return(
        <div id="financials-box" className="box">
            yo
        </div>
    )
}

export default Financials