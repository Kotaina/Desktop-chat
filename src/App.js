import './App.css';
import React from "react";
import ChatList from "./blocks/chat-list";
import Current from "./blocks/current-chat";
import MainWindow from "./blocks/window";
import Profile from "./blocks/view-profile";


class App extends React.Component {
  state = {
    chats: ["job", "fitness", "myStreet"]
  }

  render() {
    return (
      <div className="main-wrapper">
        <ChatList />
        <Current />
        <MainWindow />
        <Profile />
      </div>
    )
  }
}

export default App;
