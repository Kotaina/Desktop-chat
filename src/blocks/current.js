import React from 'react';
import "../css/Current.scss"

class Current extends React.Component {
    render() {
        let allChatChannels
        allChatChannels = this.props.channels.map((channel, index) => {
            return (
                <li
                    key={index}
                    onClick={this.props.onChannelClick}
                    className="channel-items__item">
                    # {channel}
                </li>
            )
        })

        let allChatFriends
        allChatFriends = this.props.friends.map((friend, index) => {
            return (
                <li key={index}>{friend}</li>
            )
        })

        return (
            <>
                <h1 className="current__channel-name">{this.props.chatName}</h1>
                <p className="current__all-threads">All threads</p>
                <p>Channels</p>
                <ul className="current__channel-list channel-items">
                    {allChatChannels}
                </ul>
                <h3>Friends</h3>
                <ul>
                    {allChatFriends}
                </ul>
            </>
        )
    }
}

export default Current