import React from 'react'
import avatar from '../src/assets/avatar.png'

import ProfilePhoto, { Photo, Avatar } from 'react-profile-photo'
import 'react-profile-photo/dist/index.css'

const App = () => {
  return (
    <ProfilePhoto className='profile-photo' src=''>
      <Photo className='photo' />
      <Avatar src={avatar} />
    </ProfilePhoto>
  )
}

export default App
