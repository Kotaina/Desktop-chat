import './css/App.scss';
import React from "react";
import ChatItem from './blocks/chat-item';
import Current from './blocks/current';
import data from "./data/data.json"

class App extends React.Component {

  state = {
    activeChat: { channels: [], friends: [] },
    fetchedData: [],
    chatList: [
      {
        id: 0,
        chatName: "Work",
        isOpen: false,
        channels: ["general", "support", "marketing", "thailand", "bali", "poland"],
        friends: ["Orlando Diggs", "Carmen Velasco", "Marie Jensen", "Alex Lee", "Leo Gill", "Britney Cooper"]
      },
      { id: 1, chatName: "Fitness", isOpen: false },
      { id: 2, chatName: "My street", isOpen: false }
    ],
    isChatsLoaded: true
  };


  // Работа отображения с объектами
  onItemClickHandler(evt) {
    let clikedItemId = evt.target.id
    let fullObject = [...this.state.chatList]
    let currentObject = fullObject[clikedItemId]
    this.setState(function () {
      return { activeChat: currentObject }
    })
  }


  // Рабочее получение данных с сервера
  // componentDidMount = async () => {
  //   console.log(`The state nowadays is: `)
  //   console.log(this.state)
  //   const incomingFetchData = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const parsedData = await incomingFetchData.json()
  //   let newStateData = [...this.state.fetchedData]
  //   this.setState(function () {
  //     newStateData = parsedData
  //     return { fetchedData: newStateData }
  //   })
  //   console.log('The state after fetch is: ')
  //   console.log(this.state)
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
