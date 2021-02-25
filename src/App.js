import './css/App.scss';
import React from "react";
import ChatItem from './blocks/chat-item';

class App extends React.Component {

  state = {
    chatList: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };

  render() {
    return (
      <div className="main-wrapper">

        <section className="Chat-list">
          <h1 className="visually-hidden">Chat List</h1>
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
          <ChatItem />
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
