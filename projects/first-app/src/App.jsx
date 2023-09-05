import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'dsleyton8',
        name: 'Leyton',
        initialIsFollowing: true
    }, 
    {
        userName: 'RDRBKFLLS',
        name: 'RevRadBKFLLS',
        initialIsFollowing: false
    }, 
    {
        userName: 'FCBarcelona',
        name: 'FC Barcelona',
        initialIsFollowing: false
    }, 
    {
        userName: 'ChampionsLeague',
        name: 'UEFA Champions League',
        initialIsFollowing: false
    }, 
]

export function App () {
    return (
        <div className='App'>
            {
                users.map(({ userName, name, initialIsFollowing }) => (
                        <TwitterFollowCard 
                            key={userName}
                            userName={userName} 
                            initialIsFollowing={initialIsFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                )
            }
        </div>
    )
}