import './css/App.scss';
import React from "react";
import ChatItem from './blocks/chat-item';
import Current from './blocks/current';
import Main from './blocks/main'
import workChatData from "./data/workChatData.json"
import Profile from "./blocks/profile"

class App extends React.Component {

  state = {
    activeChannel: "",
    activeProfile: {},
    activeChat: { channels: [], friends: [] },
    chatList: [],
    isChatsLoaded: true
  };

  // Необходимо добавить загрузку разных файлов, в каждом из которых будут полные данные обо всём
  onItemClickHandler = async (evt) => {
    let clickedChatId = evt.target.id
    const importedChoosenChatData = await workChatData
    this.setState(function () {
      return { activeChat: importedChoosenChatData[clickedChatId] }
    })

  }

  // Загрузка данных из локального файла
  componentDidMount = async () => {
    const importedData = await workChatData
    let newStateData = [...this.state.chatList]
    this.setState(function () {
      newStateData = importedData
      return { chatList: newStateData }
    })
  }

  // Определение текущего канала
  onChannelClickHandler(evt) {
    let updatingChannel = [...this.state.activeChannel]
    let choosenChannel = evt.target.textContent
    this.setState(function () {
      updatingChannel = choosenChannel
      return { activeChannel: updatingChannel }
    })
  }

  onFriendClickHandler(evt) {
    let choosenProfileId = evt.target.id
    let choosenProfile = this.state.activeChat.friends[choosenProfileId]
    this.setState({
      activeProfile: choosenProfile
    })
  }

  render() {
    let viewChat = this.state.activeChat

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
            chatName={viewChat.chatName}
            channels={viewChat.channels}
            friends={viewChat.friends}

            onChannelClick={(evt) => { this.onChannelClickHandler(evt) }}
            onFriendClick={(evt) => { this.onFriendClickHandler(evt) }}
          />
        </section>

        <section className="Main">
          <h1 className="visually-hidden">Main Window</h1>
          <Main
            activeChannel={this.state.activeChannel}
          />
        </section>

        <section className="profile">
          <h1 className="visually-hidden">Profile window</h1>
          <Profile
            activeProfile={this.state.activeProfile}
          />
        </section>
      </div>
    )
  }
};


export default App;
