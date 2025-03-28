import { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersTC } from './store/reducers/usersReducer'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import UsersPage from './pages/UsersPage/UsersPage'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsersTC())
  }, [dispatch])

  return(
    <div className="app">
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<UsersPage/>}/>
      </Routes>
    </div>
  )
}

export default App
