import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./focus.css"

function Focus() {
    
    useDragger("focus-box");
    return(
        <div id="focus-box" className="box">
            yo
        </div>
    )
}

export default Focus