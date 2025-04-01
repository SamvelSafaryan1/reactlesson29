import { Navigate } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage/LoginPage'
import './Header.css'
import { useSelector } from 'react-redux'

function Header(){
    const {userId} = useSelector((state) => state.auth)

    if(userId){
        return <Navigate to={`/profile/${userId}`}/>
    }

    return(
        <div className="header">
            <LoginPage/>
        </div>
    )
}

export default Header
