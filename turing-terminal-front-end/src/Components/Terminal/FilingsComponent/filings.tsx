import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./filings.css"

function Filings({openFilings}: any) {
    
    useDragger("filings-box");
    return(
        <div id="filings-box" className="box">
            yo
        </div>
    )
}

export default Filings