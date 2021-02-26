import React from 'react'
import "../css/main.scss"

class Main extends React.Component {
    render() {
        return (
            <>
                <section className="main-header">
                    <h3 className="main-header__current-chat">hashtag</h3>
                    <div className="main-header__people">
                        <span>1,654</span>
                    </div>
                    <input className="main-header__search" />
                    <button className="main-header__ring-btn">Ring</button>
                    <button className="main-header__more-btn">More</button>
                </section>
                <section className="chat-window">

                </section>
                <section>
                    <button>Clip files</button>
                    <button>Voice</button>
                    <input />
                    <button>smile</button>
                </section>
            </>
        )
    }
}


export default Main