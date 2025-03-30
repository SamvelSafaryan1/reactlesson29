import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileTC } from "../../store/reducers/profileReducer"
import './Profile.css'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const {profile} = useSelector((state) => state.profile)

//   useEffect(() => {
//         dispatch(profileTC(id))
//   }, [id, dispatch])

  return (
      <div className="profile-container">
        <h1>{profile.name}</h1>
        <h3>id: {profile.id}</h3>
        <p>Followed- {profile.followed}</p>
          <img src={profile.photos}/>
      </div>
  )
}

export default ProfilePage
