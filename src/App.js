import './css/App.scss';
import React from "react";
import ChatItem from './blocks/chat-item';
import Current from './blocks/current';

class App extends React.Component {

  state = {
    chatList: [
      { id: 1, chatName: "Work", isOpen: false },
      { id: 2, chatName: "Fitness", isOpen: false },
      { id: 3, chatName: "My street", isOpen: false }
    ],
    currentView: {
      chatName: "kek"
    },
    isChatsLoaded: true
  };
  // Не меняется название чата в currentView
  onItemClickHandler(evt) {
    let clikedItemId = evt.target.id
    let neededName = this.state.chatList[clikedItemId].chatName
    let oldGuy = this.state.currentView.chatName
    oldGuy = neededName
    console.log(this.state)
  }

  render() {

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
          <Current />
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
