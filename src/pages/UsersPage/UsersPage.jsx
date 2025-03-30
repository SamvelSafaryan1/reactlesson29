import { useDispatch, useSelector } from "react-redux"
import './UsersPage.css'
import Users from "../../Components/Users/Users"
import { changePageAC } from "../../store/reducers/usersReducer"

function UsersPage(){
    const dispatch = useDispatch()
    const {users, totalUsersCount, totalPageCount} = useSelector((state) => state.usersPage)

    const pageCount = Math.ceil(totalUsersCount / totalPageCount)

    const pageArr = []

    for(let i = 1; i <= pageCount; i++){
        pageArr.push(i)
    }

    const changePage = (page) => {
        dispatch(changePageAC(page))
    }

    return(
        <div className="page">
            <div className="btns">
            {
                pageArr.map((p) => {
                    return <button key={p} onClick={() => changePage(p)}>{p}</button>
                })
            }
            </div>
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
