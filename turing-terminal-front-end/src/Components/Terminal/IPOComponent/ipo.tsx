import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./ipo.css"

function Ipo() {
    
    useDragger("ipo-box");
    return(
        <div id="ipo-box" className="box">
            yo
        </div>
    )
}

export default Ipo