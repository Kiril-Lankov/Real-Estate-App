import "./chat.scss";

function Chat() {
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
            <div className="chatBox">Box</div>
        </div>
    )
}

export default Chat;