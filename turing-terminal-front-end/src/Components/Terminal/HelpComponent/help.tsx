import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./help.css"

function Help() {
    
    useDragger("help-box");
    return(
        <div id="help-box" className="box">
            yo
        </div>
    )
}

export default Help