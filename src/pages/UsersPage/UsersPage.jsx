import { useSelector } from "react-redux"
import './UsersPage.css'
import Users from "../../Components/Users/Users"

function UsersPage(){
    const {users} = useSelector((state) => state.usersPage)

    return(
        <div className="page">
            <div className="users-page">
            {
                users.map((user) => {
                    return <Users key={user.id} user={user}/>
                })
            }
            </div>
        </div>
    )
}

export default UsersPage
