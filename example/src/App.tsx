import React from 'react'
import avatar from '../src/assets/avatar.png'

import { ProfilePhoto, PhotoLoader } from 'react-profile-photo'
import 'react-profile-photo/dist/index.css'

const App = () => {
  return (
    <ProfilePhoto className='profile-photo' photoSrc={avatar}>
      <PhotoLoader />
    </ProfilePhoto>
  )
}

export default App
