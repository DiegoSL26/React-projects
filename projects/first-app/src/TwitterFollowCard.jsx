import { useState } from "react"

export function TwitterFollowCard ( { children, userName, initialIsFollowing } ) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-followButton is--following'
        : 'tw-followCard-followButton'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                className='tw-followCard-avatar'
                    alt="Un avatar random" 
                    src= { `https://unavatar.io/twitter/${userName}` }/>
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className= { buttonClassName } onClick={ handleClick }>
                    <span className="tw-followCard-followText">{ text }</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article> 
    )
}