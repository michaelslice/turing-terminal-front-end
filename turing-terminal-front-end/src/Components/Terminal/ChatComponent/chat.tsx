import "./chat.css"
import useDragger from "../DraggerComponent/dragger";

function Chat() {
    
    useDragger("chat-box");
    return(
        <div id="chat-box" className="box">

        </div>
    )
}

export default Chat



