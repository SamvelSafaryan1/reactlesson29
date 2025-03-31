import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileTC } from "../../store/reducers/profileReducer"
import { useParams } from "react-router-dom"
import './Profile.css'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {profile} = useSelector((state) => state.profile)

  useEffect(() => {
        dispatch(profileTC(id))
  }, [id, dispatch])

  return (
      <div className="profile-container">
        <h1>{profile?.name}</h1>
        <h3>id: {profile?.id}</h3>
        <p>Followed- {profile?.followed}</p>
        {profile?.photos?.large && <img src={profile.photos.large} alt="Profile"/>}
      </div>
  )
}

export default ProfilePage
