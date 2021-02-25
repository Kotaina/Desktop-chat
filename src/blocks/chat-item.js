import React from 'react';
import "../css/Chat-item.scss"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <section className="Chat-item" id={props.index} onClick={props.onItemClick}>
            Chat
        </section>
    )
}