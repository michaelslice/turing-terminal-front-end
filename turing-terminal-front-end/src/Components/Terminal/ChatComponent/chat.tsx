import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import useDragger from "../DraggerComponent/dragger";
import "./chat.css";

function Chat({ setOpenChat }: any) {
    useDragger("chat-box");

    const closeOpenChat = () => {
        console.log("close settings");
        setOpenChat(false);
    };

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState<any>([]);

    useEffect(() => {
        const socket = io("http://localhost:4000", {
            transports: ["websocket", "polling"]
        });

        socket.on("connect", () => {
            console.log("Connected to server");
        });

        socket.on("chat message", (msg) => {
            setComments((prevComments: any) => [...prevComments, msg]);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    const submitComment = (e: any) => {
        e.preventDefault();
        if (comment) {
            const socket = io("http://localhost:4000");
            socket.emit("chat message", comment);
            setComment("");
        }
    };

    return (
        <div id="chat-box" className="box">
            <div className="top-settings-row">
                <div className="settings-text">
                    <span>Chat</span>
                </div>
                <div className="settings-right-side-buttons">
                    <button>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="gear"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                        </svg>
                    </button>
                    <button onClick={closeOpenChat}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="x"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="top-settings-row">
                <div>Anonymous</div>
                <div>General</div>
            </div>

            <div className="middle-section">
                <div className="open-channels">
                    Open Channels
                    <div>#welcome</div>
                </div>

                <div className="chat-location">
                    General
                    <div className="bottom">
                        <ul id="messages">
                            {comments.map((msg: any, index: any) => (
                                <li key={index}>{msg}</li>
                            ))}
                        </ul>
                        <form id="input" onSubmit={submitComment}>
                            <input
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Comment"
                            />
                            <button type="submit">Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
