import { useState } from "react";
import useDragger from "../DraggerComponent/dragger";
import "./userbiography.css"

function UserBiography() {
    
    useDragger("user-biography-box");
    return(
        <div id="user-biography-box" className="box">
            yo
        </div>
    )
}

export default UserBiography