import React from 'react'
import "../css/main.scss"

class Main extends React.Component {
    render() {

        let activeChannel = this.props.activeChannel

        return (
            <>
                <section className="main-header">
                    <h3 className="main-header__current-chat">{activeChannel}</h3>
                    <div className="main-header__people">
                        <span>1,654</span>
                    </div>
                    <input className="main-header__search" />
                    <button className="main-header__ring-btn">Ring</button>
                    <button className="main-header__more-btn">More</button>
                </section>
                <section className="chat-window">

                </section>
                <section className="new-messge-field">
                    <button className="new-messge-field__clip-btn">Clip files</button>
                    <button className="new-messge-field__voice-btn">Voice</button>
                    <input className="new-messge-field__input" placeholder={"write to " + activeChannel} />
                    <button className="new-messge-field__smile-btn">smile</button>
                </section>
            </>
        )
    }
}


export default Main