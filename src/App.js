import './css/App.scss';
import React from "react";
import ChatItem from './blocks/chat-item';
import Current from './blocks/current';

class App extends React.Component {

  state = {
    activeChat: {},
    chatList: [
      {
        id: 0,
        chatName: "Work",
        isOpen: false,
        channels: ["general", "support", "marketing", "thailand", "bali", "poland"]
      },
      { id: 1, chatName: "Fitness", isOpen: false },
      { id: 2, chatName: "My street", isOpen: false }
    ],
    isChatsLoaded: true
  };

  onItemClickHandler(evt) {
    let clikedItemId = evt.target.id
    let fullObject = [...this.state.chatList]
    let currentObject = fullObject[clikedItemId]
    this.setState(function () {
      return { activeChat: currentObject }
    })
    console.log(this.state)
  }

  render() {

    // Формирование чатов по количеству объектов в state.chatList
    let chats = null;
    if (this.state.isChatsLoaded) {
      chats = this.state.chatList.map((chat, index) => {
        return (
          <ChatItem
            key={index}
            index={index}
            onItemClick={(evt) => { this.onItemClickHandler(evt) }}
          />
        )
      }
      )
    }

    return (
      <div className="main-wrapper">

        <section className="Chat-list">
          <h1 className="visually-hidden">Chat List</h1>
          {chats}
        </section>

        <section className="Current">
          <h1 className="visually-hidden">Current chat</h1>
          <Current
            chatName={this.state.activeChat.chatName}
          />
        </section>

        <section className="Main">
          <h1 className="visually-hidden">Main Window</h1>
        </section>

        <section className="Profile">
          <h1 className="visually-hidden">Profile window</h1>
        </section>
      </div>
    )
  }
};


export default App;
