import React from 'react'
import { getImageUrl } from '../util/utils'

const Profile = ({name, profession, accomplishment, imageId}) => {
  return (
    <div className='profile-card'>
        <img src={getImageUrl(imageId)} className='profile-image' />
      <h3>{name}</h3>
      <p>{profession} - {accomplishment}</p>
    </div>
  )
}

export default Profile
