import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext);
  
    if(!user)return <div>Welcome</div>
    return <div>{user.userName}</div>

}

export default Profile