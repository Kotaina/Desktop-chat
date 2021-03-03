import './css/App.scss';
import React from "react";
import ChatItem from './blocks/chat-item';
import Current from './blocks/current';
import Main from './blocks/main'
import data from "./data/data.json"
import workChatData from "./data/workChatData.json"
import Profile from "./blocks/profile"

class App extends React.Component {

  state = {
    activeChannel: "",
    activeChat: { channels: [], friends: [] },
    chatList: [],
    isChatsLoaded: true
  };

  // Необходимо добавить загрузку разных файлов, в каждом из которых будут полные данные обо всём
  onItemClickHandler = async (evt) => {
    let clickedChatId = evt.target.id
    console.log(clickedChatId)
    if (clickedChatId === "0") {
      console.log("init")
      const importedChoosenChatData = await workChatData
      let parsedData = importedChoosenChatData
      console.log(parsedData)
      this.setState(function () {
        return { activeChat: parsedData[clickedChatId] }
      })
    }
  }

  // Переключение между чатами
  // onItemClickHandler(evt) {
  //   let clikedItemId = evt.target.id
  //   let fullObject = [...this.state.chatList]
  //   let currentObject = fullObject[clikedItemId]
  //   this.setState(function () {
  //     return { activeChat: currentObject }
  //   })
  // }

  // Загрузка данных из локального файла
  componentDidMount = async () => {
    const importedData = await data
    let newStateData = [...this.state.chatList]
    this.setState(function () {
      newStateData = importedData
      return { chatList: newStateData }
    })
  }

  // Определение текущего канала
  onChannelClickHandler(evt) {
    console.log(evt.target.textContent)
    let updatingChannel = [...this.state.activeChannel]
    let choosenChannel = evt.target.textContent
    this.setState(function () {
      updatingChannel = choosenChannel
      return { activeChannel: updatingChannel }
    })
  }

  render() {
    let viewChat = this.state.activeChat
    console.log(viewChat.friends)

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
          <Profile />
        </section>
      </div>
    )
  }
};


export default App;
