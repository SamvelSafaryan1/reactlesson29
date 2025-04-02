import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { profileTC } from "../../store/reducers/profileReducer"
import { useParams } from "react-router-dom"
import './Profile.css'
import { socialAPI } from "../../api/api"

const ProfilePage = () => {
  const [profiles, setProfiles] = useState(local)
  const dispatch = useDispatch()
  const {id} = useParams()
  const {profile} = useSelector((state) => state.profile)
  const {userId} = useSelector((state) => state.auth)

  const local = JSON.parse(localStorage.getItem('profile'))

  let isAuth = userId === +id

  const editPhoto = (e) => {
      const file = e.target.files[0]
      socialAPI.putPhotoEdit(file)
    }

  useEffect(() => {
    if(id){
      dispatch(profileTC(id))
    }  
  }, [id, dispatch])

  useEffect(() => {
    if(profiles){
      localStorage.setItem('profile', JSON.stringify(profiles))
    }
  }, [profiles])

  if(!profile){
    return <div>Loading...</div>
  }
  console.log(profile?.photos?.large)

  return(
      <div className="profile-container">
        <div className="photo-name">
          <h1>{profile?.fullName}</h1>
          {profile?.photos?.large ? (<img src={profile?.photos?.large} alt="Profile"/>) : (<p>no photo</p>)}
          <div className="edit">
            <input type='file' onChange={editPhoto}/>
            <button>Edit</button>
          </div>
          {
            isAuth && <></>
          }
        </div>
        <div className="info">
          <h3>id: {profile?.userId}</h3>
        </div>
      </div>
  )
}

export default ProfilePage
