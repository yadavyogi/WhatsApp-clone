import React from 'react'


export default function Avatar({ user, showName }) {
    return (
        <div className="avatar-component">
            <img className="avatar" src={"https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent-Picture.png"} alt="" />
            {showName && <h3 className="avatar-title">{user.name}</h3>}
        </div>
    )
}
