import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTC } from './store/reducers/usersReducer'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import UsersPage from './pages/UsersPage/UsersPage'
import ProfilePage from './pages/ProfilePage/Profile'

function App() {
  const dispatch = useDispatch()

  const {page} = useSelector((state) => state.usersPage)

  useEffect(() => {
    dispatch(getUsersTC(page))
  }, [page])

  return(
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/users' element={<UsersPage/>}/>
        <Route path='/profile/:id' element={<ProfilePage/>}/>
      </Routes>
    </div>
  )
}

export default App
