import { useState } from "react";
import "./chat.scss";

function Chat({chats}) {
    //functionality about chat - show Chatbox if we have any chat messages and hide if we do not

    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Message</h1>
                <div className="message">
                    <img src="/john-doe.jpg" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, hic.
                    </p>
                </div>
                <div className="message">
                    <img src="/john-doe.jpg" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, hic.
                    </p>
                </div>
                <div className="message">
                    <img src="/john-doe.jpg" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, hic.
                    </p>
                </div>
                <div className="message">
                    <img src="/john-doe.jpg" alt="" />
                    <span>John Doe</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, hic.
                    </p>
                </div>
            </div>
            { chat && (<div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="/john-doe.jpg" alt="" />
                        John Doe
                    </div>
                    <span className="close" onClick={()=>{setChat(null)}}>X</span> 
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sapiente!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sapiente!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sapiente!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sapiente!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sapiente!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, sapiente!</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea></textarea>
                    <button>Send</button>
                </div>
            </div>)}
        </div>
    )
}

export default Chat;