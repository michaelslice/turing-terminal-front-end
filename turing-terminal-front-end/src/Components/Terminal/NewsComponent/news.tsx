import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./news.css"

function News() {
    
    useDragger("news-box");
    return(
        <div id="news-box" className="box">
            yo
        </div>
    )
}

export default News