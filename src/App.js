import './App.css';
import React from "react";
import ChatList from "./blocks/chat-list";
import Current from "./blocks/current-chat";
import MainWindow from "./blocks/window";
import Profile from "./blocks/view-profile";


class App extends React.Component {
  state = {
    chatList: [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }

    ]
  };

  getChatlistData = async () => {
    const chatListData = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await chatListData.json();
    console.log(`Incoming data of users is: ${data}`);
    this.state.chatList = data;
    console.log(this.state);
  };

  makeChatList() {
    for (let i = 0; i < this.state.chatList.length; i++) {
      let chat = <div></div>
      console.log("Gotit")
      return chat;
    }
  };

  // chats = this.state.chatList.map((car, index) => {
  //   return (
  //     <ChatList
  //     />
  //   )
  // })

  render() {
    return (
      <div className="main-wrapper">
        <ChatList
          // click={this.getChatlistData}
          generateChatlist
        />
        <Current />
        <MainWindow />
        <Profile />
      </div>
    )
  }
};


export default App;
