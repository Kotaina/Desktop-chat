import './App.css';
import React from "react";

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

  render() {
    return (
      <div className="main-wrapper">

        <section className="Chat-list">
          <h1 className="visually-hidden">Chat List</h1>
        </section>

        <section className="Current">
          <h1 className="visually-hidden">Current chat</h1>
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
