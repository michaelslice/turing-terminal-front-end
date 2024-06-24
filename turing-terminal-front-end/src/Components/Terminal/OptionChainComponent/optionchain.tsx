import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./optionchain.css"

function OptionsChain() {
    
    useDragger("options-box");
    return(
        <div id="options-box" className="box">
            yo
        </div>
    )
}

export default OptionsChain