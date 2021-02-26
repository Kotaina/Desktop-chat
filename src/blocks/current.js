import React from 'react';
import "../css/Current.scss"

class Current extends React.Component {
    render() {
        let allChatChannels
        allChatChannels = this.props.channels.map((channel, index) => {
            return (
                <li key={index}># {channel}</li>
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
                <h1>{this.props.chatName}</h1>
                <p>All treads</p>
                <p>Channels</p>
                <ul>
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