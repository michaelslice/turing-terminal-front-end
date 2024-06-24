import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./holders.css"

function Holders() {
    
    useDragger("holders-box");
    return(
        <div id="holders-box" className="box">
            yo
        </div>
    )
}

export default Holders