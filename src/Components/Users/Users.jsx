import './Users.css'
import { NavLink } from 'react-router-dom'

function Users({user}){
    return(
        <div className="users">
            
            <h3>{user.name}</h3>
            <img src={user?.photos.large === null ? "https://avatars.mds.yandex.net/i?id=22543b87421d2a6bb9fbd3bb8b2421aa626e240c-3614575-images-thumbs&n=13" : user?.photos.large}/>
           
        </div>
    )
}

export default Users
