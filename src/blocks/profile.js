import React from 'react';
import "../css/Profile.scss"

class Profile extends React.Component {
    render() {
        let currentProfile = this.props.activeProfile
        return (
            <>
                <section className="profile__photo"></section>
                <h3 className="profile__name">{currentProfile.name}</h3>
                <h4 className="profile__position">{currentProfile.position}</h4>
                <section className="profile__links social">
                    <a className=" social__link social__link--fb" href='fb.com'>FB</a>
                    <a className=" social__link social__link--insta" href='instagram.com'>IN</a>
                    <a className=" social__link social__link--twitter" href="twitter.com">TW</a>
                    <a className=" social__link social__link--linked" href="linkedin.com">LI</a>
                </section>
                <button className="profile__message-btn">Message</button>
                <ul className="profile__more additional">
                    <li className="additional__username">
                        Username:
                        <span>{currentProfile.username}</span>
                    </li>
                    <li className="additional__email">
                        Email:
                        <span>{currentProfile.email}</span>
                    </li>
                    <li className="additional__skype">
                        Skype:
                        <span>{currentProfile.skype}</span>
                    </li>
                    <li className="additional__timezone">
                        Timezone:
                        <span>{currentProfile.timezone}</span>
                    </li>
                </ul>
            </>
        )
    }
}

export default Profile