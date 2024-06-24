import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./worldindices.css"

function WorldIndices() {
    
    useDragger("world-indices-box");
    return(
        <div id="world-indices-box" className="box">
            yo
        </div>
    )
}

export default WorldIndices