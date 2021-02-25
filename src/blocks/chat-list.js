import React from "react";
import ChatItem from "./chat-item";

import "../css/chat-list.css";

class ChatList extends React.Component {
    render() {
        if (this.state.ChatList !== undefined) {
            chats = this.state.ChatList.map((ch, index) => {
                return (
                    <ChatItem
                        index={index}
                    />
                )
            }
        }

        return (
            <div>
                <h2 className="example-block chat-list" onClick={this.props.click}>Чат-лист</h2>
                <section className="chats">

                </section>
            </div>

        )
    }
}

export default ChatList